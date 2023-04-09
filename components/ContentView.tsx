import styled from "styled-components";
import { CommentController } from "./CommentController";
const ContentWrap = styled.section`
  word-break: break-all;
  margin: 3.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  @media (min-width: 48rem) {
    padding-left: 3.5rem;
  }
`;
const ContentView = ({ data }) => {
  return (
    data && (
      <ContentWrap>
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
        <CommentController id={data.id} comments={data.data.comments} />
      </ContentWrap>
    )
  );
};
export default ContentView;
