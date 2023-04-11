import axios from "axios";
import router from "next/router";
import { useContext, useState } from "react";
import { AccountSettingsView } from "../components/AccountSettingsView";
import { Nav, NavBar } from "../components/NavBar";
import { AccountBarController } from "../components/AccountBarController";
import { AccountInfo } from "../components/AccountInfo";
import AvatarUploadForm from "../components/AvatarUploadForm";
import { UserContext } from "./_app";

const AccountSettingsController = () => {
  const userContext = useContext(UserContext);
  const [option, setOption] = useState("default");
  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log(e.target.newPw);
    axios
      .post(`/api/passwordReset`, {
        token: sessionStorage.getItem("token"),
        password: e.target.newPw.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
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
    <>
      {userContext.user && (
        <div className="container">
          <NavBar />
          <div style={{ display: "flex" }}>
            <AvatarUploadForm
              onSubmit={function (imageUrl: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <AccountInfo />
          </div>
          <AccountSettingsView
            option={option}
            setOption={setOption}
            handleDelete={handleDelete}
            handlePasswordChange={handlePasswordChange}
          />
          <AccountBarController />
        </div>
      )}
    </>
  );
};
export default AccountSettingsController;
