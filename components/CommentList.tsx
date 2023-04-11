import styled from "styled-components";

import { uuid } from "uuidv4";
import { convertTimestamp } from "../utils/convertTimeStamp";
import { Avatar } from "./Avatar";

const CommentBox = styled.ul`
  list-style: none;
  padding: 0 0 8rem 0;

  li {
    display: flex;
    flex-direction: column;
    background-color: #1c1c1c;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

    p {
      margin: 0;
      font-size: 1.2rem;
      color: #ffffff;
      text-shadow: 0 0 0.5rem #00ff00;
    }

    span {
      font-size: 0.8rem;
      color: #666666;
    }
  }
`;
export const CommentList = (props) => {
  return (
    <CommentBox>
      {props.comments.map((comment) => {
        return (
          <li key={uuid()}>
            <Avatar authorId={comment.authorId} />
            <span>{comment.authorName}</span>
            <span>{comment.text}</span>
            <span>{convertTimestamp(comment.timestamp)}</span>
          </li>
        );
      })}
    </CommentBox>
  );
};
