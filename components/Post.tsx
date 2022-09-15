import Link from "next/link";

import styled from "styled-components";
import { isPropertySignature } from "typescript";
import { convertTimestamp } from "../utils/convertTimeStamp";

const Article = styled.article`
  display: flex;
  height: 5rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;

export const Post = (props) => {
  let post = JSON.parse(props.data.body);
  return (
    <Article>
      <Link href={`posts/${props.data.id}`}>
        <p>{post.form.title}</p>
      </Link>
      <p>{convertTimestamp(post.timestamp)}</p>
    </Article>
  );
};
