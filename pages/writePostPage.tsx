import { AccountBarController } from "../components/AccountBarController";
import { NavBar } from "../components/NavBar";
import { PostWriteController } from "../components/PostWriteController";
import styles from "../styles/Home.module.css";
export default function WritePostPage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <PostWriteController />
      <AccountBarController />
    </div>
  );
}
