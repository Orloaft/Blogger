import { useEffect, useState } from "react";
import { AccountBarView } from "./AccountBarView";
import { SignInBar } from "./SignInBar";
import axios from "axios";
export const AccountBarController = () => {
  const [credentials, setCredentials] = useState(null);
  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/user/${token}`)
        .then((res) => {
          setCredentials(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  if (credentials) {
    return <AccountBarView credentials={credentials} />;
  } else {
    return <SignInBar />;
  }
};
