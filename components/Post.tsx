import Link from "next/link";
import styled from "styled-components";
import { isPropertySignature } from "typescript";

const Article = styled.article`
  display: flex;
  height: 5rem;
  border: 1px solid gray;
`;

export const Post = (props) => {
  return (
    <Article>
      <Link href={`posts/${props.data.id}`}>{props.data.body}</Link>
    </Article>
  );
};
