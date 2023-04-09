import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AccountBarController } from "../../components/AccountBarController";
import ContentView from "../../components/ContentView";
import { NavBar } from "../../components/NavBar";
import styles from "../../styles/Home.module.css";
const ContentController = () => {
  const [content, setContent] = useState(null);
  const router = useRouter();
  const { postId } = router.query;
  useEffect(() => {
    axios
      .get(`/api/${postId}`)
      .then((result) => {
        setContent(JSON.parse(result.data[0].data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <NavBar />
      <ContentView data={content} />
      <AccountBarController />
    </div>
  );
};
export default ContentController;
