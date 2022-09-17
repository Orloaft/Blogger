import axios from "axios";
import { useState } from "react";
import { PostWriteView } from "./PostWriteView";

export const PostWriteController = () => {
  const [form, setForm] = useState({ title: "", body: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    let token = sessionStorage.getItem("token");
    axios
      .post(`/api/makePost`, { form, token })
      .then(() => {
        setForm({ title: "", body: "" });
      })
      .catch((err) => console.log(err));
  }; // make sure to match the name of the input with the property name you want change
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
