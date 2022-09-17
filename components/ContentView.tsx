import styled from "styled-components";
const ContentWrap = styled.section`
  word-break: break-all;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 48rem) {
    padding-left: 3.5rem;
  }
`;
const ContentView = ({ data }) => {
  return (
    data && (
      <ContentWrap>
        <h2>{data.title}</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            {" "}
            <b>by: </b>
            {data.author}
          </span>{" "}
          <span>
            <b>date: </b>
            {data.timestamp}
          </span>
        </div>
        <p>{data.body}</p>
      </ContentWrap>
    )
  );
};
export default ContentView;
