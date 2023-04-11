import axios from "axios";
import { useEffect, useState } from "react";

export const Avatar = ({ authorId }: { authorId: string }) => {
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    axios.get(`/api/avatars/${authorId}`).then((res) => {
      setUrl(res.data);
    });
  }, []);
  return (
    <>
      {url && (
        <img
          style={{ height: "2rem", width: "2rem" }}
          src={process.env.NEXT_PUBLIC_CLIENT + url}
        />
      )}
    </>
  );
};
