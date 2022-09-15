import { NavBar } from "../components/NavBar";
import { PostFeedController } from "../components/PostFeedController";
import { PostWriteController } from "../components/PostWriteController";
import styles from "../styles/Home.module.css";
export default function WritePostPage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <PostWriteController />
    </div>
  );
}
