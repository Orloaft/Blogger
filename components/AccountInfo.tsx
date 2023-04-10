import { useContext } from "react";
import { UserContext } from "../pages/_app";

export const AccountInfo = () => {
  const userContext = useContext(UserContext);
  return <div>{userContext.user.username}</div>;
};
