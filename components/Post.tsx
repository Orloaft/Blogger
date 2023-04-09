import Link from "next/link";
import React from "react";

import styled from "styled-components";

import { convertTimestamp } from "../utils/convertTimeStamp";

const Article = styled.article`
  cursor: pointer;
  position: relative;
  color: #d1a8ff;
  border-radius: 0.5rem;
  margin: 0.5rem;
  background-color: #2e2e2e;
  background-image: linear-gradient(to bottom, #2e2e2e, #454545);
  display: flex;
  height: 5rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  &:hover::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #d1a8ff;
    animation: neon 0.5s infinite;
    z-index: 4;
  }
  @keyframes neon {
    from {
      box-shadow: 0 0 10px #d1a8ff, 0 0 20px #d1a8ff, 0 0 30px #d1a8ff,
        0 0 40px #d1a8ff, 0 0 70px #d1a8ff, 0 0 80px #d1a8ff, 0 0 100px #d1a8ff,
        0 0 150px #d1a8ff;
    }
    to {
      box-shadow: 0 0 5px #d1a8ff, 0 0 10px #d1a8ff, 0 0 15px #d1a8ff,
        0 0 20px #d1a8ff, 0 0 35px #d1a8ff, 0 0 40px #d1a8ff, 0 0 50px #d1a8ff,
        0 0 75px #d1a8ff;
    }
  }
`;

export const Post = (props) => {
  let post = JSON.parse(props.data.data);

  return (
    <Article>
      <Link href={`posts/${props.data.id}`}>{post.title}</Link>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{convertTimestamp(post.timestamp)}</span>
        <span>Author: {post.author}</span>{" "}
      </div>
    </Article>
  );
};
