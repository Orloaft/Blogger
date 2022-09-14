import styled from "styled-components";
const ContentWrap = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 48rem) {
    padding-left: 3.5rem;
  }
`;
const ContentView = (props) => {
  return <ContentWrap>boomshackalacka</ContentWrap>;
};
export default ContentView;
