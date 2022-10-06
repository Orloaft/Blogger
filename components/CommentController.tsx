import axios from "axios";
import { useState } from "react";
import { CommentList } from "./CommentList";

export const CommentController = (props) => {
  const [comments, setComments] = useState(null);
  const submitHandle = (e) => {
    axios
      .post(`/api/comment`, { id: props.id, body: e.target.comment.value })
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
