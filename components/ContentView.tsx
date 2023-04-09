import styled from "styled-components";
import { CommentController } from "./CommentController";
const ContentWrap = styled.section`
  width: 100%;

  word-break: break-all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  padding-bottom: 3rem;
  & > div {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30% 0 0 0;
  }
  @media (min-width: 48rem) {
    padding: 0 3.5rem;
    padding-bottom: 3rem;
    & > div {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10% 0 0 0;
    }
  }
`;
const ContentView = ({ data }) => {
  return (
    data && (
      <ContentWrap>
        <div>
          <h2>{data.data.title}</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              {" "}
              <b>by: </b>
              {data.data.author}
            </span>{" "}
            <span>
              <b>date: </b>
              {data.data.timestamp}
            </span>
          </div>
          <p>{data.data.body}</p>
        </div>
        <CommentController id={data.id} comments={data.data.comments} />
      </ContentWrap>
    )
  );
};
export default ContentView;
