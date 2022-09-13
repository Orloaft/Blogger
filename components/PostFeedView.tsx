import styled from "styled-components";
import { Post } from "./Post";

interface PostFeedViewProps {
  posts: any[] | null;
}
const Feed = styled.section``;
export const PostFeedView = (props: PostFeedViewProps) => {
  return (
    <>
      {props.posts &&
        props.posts.map((postData) => {
          return <Post key={postData.id} data={postData} />;
        })}
    </>
  );
};
