import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "../../../components/SignUpPageView";
import { useState } from "react";
export default function Confirmations(props) {
  const router = useRouter();
  const { code } = router.query;
  const [msg, setMsg] = useState<string>("");
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
      }}
    >
      {(msg && msg) || (
        <Button
          onClick={() => {
            axios
              .post(`/api/users/confirmations/${code}`)
              .then((res) => {
                setMsg(res.data.message);
                setTimeout(() => {
                  router.push("/");
                }, 2000);
              })
              .catch((err) => console.log(err));
          }}
        >
          Confirm email
        </Button>
      )}
    </div>
  );
}
