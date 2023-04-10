import React, { useState } from "react";
import axios from "axios";
import { Form, Input } from "./SignUpPageView";

interface Props {
  onSubmit: (imageUrl: string) => void;
}

const AvatarUploadForm: React.FC<Props> = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

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

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const response = await axios.post("/api/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onSubmit(response.data.imageUrl);
    } catch (error) {
      setError("Failed to upload image");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="avatar">Select an image file for your avatar:</label>
      <Input
        type="file"
        id="avatar"
        onChange={handleFileSelect}
        accept="image/*"
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Upload</button>
    </Form>
  );
};

export default AvatarUploadForm;
