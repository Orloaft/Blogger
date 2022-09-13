import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { PostFeedController } from "../components/PostFeedController";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <PostFeedController />
    </div>
  );
}
