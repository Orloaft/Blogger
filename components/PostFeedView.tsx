import styled from "styled-components";
import { Post } from "./Post";

interface PostFeedViewProps {
  posts: any[] | null;
}
const Feed = styled.section`
  width: 100%;
  padding-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 48rem) {
    padding-top: 0;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`;
export const PostFeedView = (props: PostFeedViewProps) => {
  return (
    <Feed>
      {props.posts &&
        props.posts.map((postData) => {
          return (
            <Post key={postData.id} data={postData.data} id={postData.id} />
          );
        })}
    </Feed>
  );
};
