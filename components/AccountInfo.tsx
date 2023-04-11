import { useContext, useEffect } from "react";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";
export const AccountInfo = () => {
  const router = useRouter();
  const userContext = useContext(UserContext);

  return (
    <>
      <div>{userContext.user && userContext.user.username}</div>
      {userContext.user.avatarurl && (
        <img
          style={{ height: "6rem", width: "6rem" }}
          src={process.env.NEXT_PUBLIC_CLIENT + userContext.user.avatarurl}
        />
      )}
    </>
  );
};
