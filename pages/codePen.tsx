import { AccountBarController } from "../components/AccountBarController";

import { NavBar } from "../components/NavBar";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/CodePen"), { ssr: false });
export default function CodePenController() {
  return (
    <div className="container">
      <NavBar />
      <Editor />
      <AccountBarController />
    </div>
  );
}
