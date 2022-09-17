import { useRouter } from "next/router";
import { useState } from "react";
import { SignInPageView } from "../components/SignInPageView";
import axios from "axios";

export default function SignInPageController() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e, name) => {
    let newForm = { ...form };
    newForm[name] = e.target.value;
    setForm(newForm);
  };
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    await axios
      .post(`/api/signIn`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((result) => {
        sessionStorage.setItem("token", result.data.token);
        setMessage(result.data.message);
        setForm({ email: "", password: "" });
        result.data.token && router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SignInPageView
      onChange={handleChange}
      form={form}
      submit={submitHandler}
      message={message}
    />
  );
}
