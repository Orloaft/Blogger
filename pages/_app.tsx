import axios from "axios";
import { createContext, useEffect, useState } from "react";
import "../styles/globals.css";
export const UserContext = createContext({
  user: { id: null, username: null, avatarurl: null },
  setUser: null,
});
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    sessionStorage.getItem("token") &&
      axios.get(`/api/users/${sessionStorage.getItem("token")}`).then((res) => {
        setUser(res.data);
      });
  }, []);
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {" "}
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
