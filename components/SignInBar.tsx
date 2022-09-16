import Link from "next/link";
import styled from "styled-components";
export const Bar = styled.div`
  position: fixed;
  background-color: #e8d8d8;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.25rem;
  @media (min-width: 48rem) {
    flex-direction: column;
    right: 0;
    width: auto;
    height: 100%;
  }
`;

export const SignInBar = () => {
  return (
    <Bar>
      <Link href="/signInPage">SIGN IN</Link>
    </Bar>
  );
};
