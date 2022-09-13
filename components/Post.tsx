import styled from "styled-components";
import { isPropertySignature } from "typescript";

const Article = styled.article`
  color: black;
`;

export const Post = (props) => {
  return <Article>{props.data.body}</Article>;
};
