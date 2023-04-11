import { useContext, useEffect } from "react";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";
export const AccountInfo = () => {
  const router = useRouter();
  const userContext = useContext(UserContext);

  return (
    <>
      <div>{userContext.user && userContext.user.username}</div>
      {userContext.user.avatarurl && <img src={userContext.user.avatarurl} />}
    </>
  );
};
