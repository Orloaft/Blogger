import Link from "next/link";
import React from "react";

import styled from "styled-components";

import { convertTimestamp } from "../utils/convertTimeStamp";

const Article = styled.article`
  display: flex;
  height: 5rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
