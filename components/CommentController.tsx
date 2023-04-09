import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../pages/_app";
import { CommentList } from "./CommentList";
import { Button, Form } from "./SignUpPageView";

export const CommentController = (props) => {
  const userContext = useContext(UserContext);
  const submitHandle = (e) => {
    e.preventDefault();

    axios
      .post(`/api/comment`, {
        id: props.id,
        comment: {
          text: e.target.comment.value,
          authorId: userContext.user.id,
        },
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form onSubmit={(e) => submitHandle(e)}>
        <textarea
          style={{ maxHeight: "6rem" }}
          name="comment"
          placeholder="comment..."
        ></textarea>
        <Button>send comment</Button>
      </Form>
      <CommentList comments={props.comments} />
    </>
  );
};
