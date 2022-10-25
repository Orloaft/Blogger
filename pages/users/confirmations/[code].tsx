import axios from "axios";
import { useRouter } from "next/router";
export default function Confirmations(props) {
  const router = useRouter();
  const { code } = router.query;
  return (
    <button
      onClick={() => {
        axios
          .post(`http://localhost:8080/users/confirmations/${code}`)
          .then((res) => {
            alert(res.data.message);
            router.push("/");
          })
          .catch((err) => console.log(err));
      }}
    >
      Confirm email
    </button>
  );
}
