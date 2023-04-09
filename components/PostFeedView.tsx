import styled from "styled-components";
import { Post } from "./Post";

interface PostFeedViewProps {
  posts: any[] | null;
}
const Title = styled.span`
  align-self: center;
  @keyframes neon {
    from {
      text-shadow: 0 0 10px #3ef5f899, 0 0 20px #3ef5f899, 0 0 30px #3ef5f899,
        0 0 40px #3ef5f899;
    }
    to {
      text-shadow: 0 0 5px #3ef5f899, 0 0 10px #3ef5f899, 0 0 15px #3ef5f899,
        0 0 20px #3ef5f899;
    }
  }
  font-family: "Orbitron", sans-serif;
  font-size: 3.2em;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #d1a8ff;
  text-shadow: 0 0 10px #3ef5f899;
  animation: neon 1s ease-in-out infinite alternate;
`;
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
      <Title>BLONGR</Title>
      {props.posts &&
        props.posts.map((postData) => {
          return (
            <Post key={postData.id} data={postData.data} id={postData.id} />
          );
        })}
    </Feed>
  );
};
