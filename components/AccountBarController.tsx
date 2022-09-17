import { useEffect, useState } from "react";
import { AccountBarView } from "./AccountBarView";
import { SignInBar } from "./SignInBar";
import axios from "axios";
export const AccountBarController = () => {
  const [credentials, setCredentials] = useState(null);
  const signOut = () => {
    sessionStorage.removeItem("token");
    setCredentials(null);
  };
  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`/api/user/${token}`)
        .then((res) => {
          setCredentials(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  if (credentials) {
    return <AccountBarView signOut={signOut} credentials={credentials} />;
  } else {
    return <SignInBar />;
  }
};
