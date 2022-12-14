import styled from "styled-components";
import { Post } from "./Post";

interface PostFeedViewProps {
  posts: any[] | null;
}
const Feed = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 48rem) {
    padding-left: 3.5rem;
  }
`;
export const PostFeedView = (props: PostFeedViewProps) => {
  return (
    <Feed>
      {props.posts &&
        props.posts.map((postData) => {
          return <Post key={postData.id} data={postData} />;
        })}
    </Feed>
  );
};
