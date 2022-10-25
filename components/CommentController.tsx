import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../pages/_app";
import { CommentList } from "./CommentList";

export const CommentController = (props) => {
  const [comments, setComments] = useState([]);
  const userContext = useContext(UserContext);
  const submitHandle = (e) => {
    axios
      .post(`/api/comment`, {
        id: props.id,
        comment: {
          text: e.target.comment.value,
          authorId: userContext.user.id,
        },
      })
      .then((res) => {
        setComments(res.data[0]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={(e) => submitHandle(e)}>
        <textarea name="comment"></textarea>
        <button>send comment</button>
      </form>
      <CommentList comments={comments} />
    </>
  );
};
