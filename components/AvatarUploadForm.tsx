import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "./SignUpPageView";
import { toBase64 } from "../utils/apiUtils";

interface Props {
  onSubmit: (imageUrl: string) => void;
}

const AvatarUploadForm: React.FC<Props> = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select an image file");
      return;
    }

    const base64: string = (await toBase64(selectedFile)) as string;

    try {
      const response = await axios.post("api/uploadavatar", {
        base64: base64,
        fileName: selectedFile.name,
        token: sessionStorage.getItem("token"),
      });
      console.log(response);
      setUrl(response.data.file);
    } catch (error) {
      setError("Failed to upload image");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {url}
      <label htmlFor="avatar">Select an image file for your avatar:</label>
      <Input
        type="file"
        id="avatar"
        onChange={handleFileSelect}
        accept="image/*"
      />
      {error && <div className="error">{error}</div>}
      <Button type="submit">Upload</Button>
    </Form>
  );
};

export default AvatarUploadForm;
