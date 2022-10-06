import axios from "axios";
import router from "next/router";
import { useState } from "react";
import { AccountSettingsView } from "../components/AccountSettingsView";

const AccountSettingsController = () => {
  const [option, setOption] = useState("default");
  const handleDelete = () => {
    axios
      .post(`/api/deleteAccount`, { token: sessionStorage.getItem("token") })
      .then((res) => {
        console.log(res.data);
        sessionStorage.removeItem("token");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <AccountSettingsView
      option={option}
      setOption={setOption}
      handleDelete={handleDelete}
    />
  );
};
export default AccountSettingsController;
