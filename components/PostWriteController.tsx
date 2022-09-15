import axios from "axios";
import { useState } from "react";
import { PostWriteView } from "./PostWriteView";

export const PostWriteController = () => {
  const [form, setForm] = useState({ title: "", body: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/makePost", { form })
      .then(() => {
        setForm({ title: "", body: "" });
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e, name) => {
    let newForm = { ...form };
    newForm[name] = e.target.value;
    setForm(newForm);
  };
  return (
    <PostWriteView
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      form={form}
    />
  );
};
