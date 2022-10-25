import { useRouter } from "next/router";
import { useState } from "react";
import { SignInPageView } from "../components/SignInPageView";
import axios from "axios";
import { SignUpPageView } from "../components/SignUpPageView";

export default function SignUpPageController() {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const handleChange = (e, name) => {
    let newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    await axios
      .post(`/api/signUp`, {
        email: form.email,
        username: form.username,
        password: form.password,
      })
      .then((result) => {
        setMessage(result.data.message);
        setForm({ email: "", username: "", password: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <SignUpPageView
      onChange={handleChange}
      form={form}
      submit={submitHandler}
      message={message}
    />
  );
}
