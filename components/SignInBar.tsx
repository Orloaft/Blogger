import Link from "next/link";
import styled from "styled-components";
export const Bar = styled.div`
background-color: #2e2e2e;
background-image: linear-gradient(to bottom, #2e2e2e, #454545);
position:fixed;
width:100%;
bottom:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  & > ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      cursor:pointer;
      color:#d1a8ff;
      position: relative;
      &:hover::before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #d1a8ff;
        animation: neon 1s infinite;
        z-index: 4;
      }
  @keyframes neon {
    from {
      box-shadow: 0 0 10px #d1a8ff, 0 0 20px #d1a8ff, 0 0 30px #d1a8ff,
        0 0 40px #d1a8ff, 0 0 70px #d1a8ff, 0 0 80px #d1a8ff, 0 0 100px #d1a8ff,
        0 0 150px #d1a8ff;
    }
    to {
      box-shadow: 0 0 5px #d1a8ff, 0 0 10px #d1a8ff, 0 0 15px #d1a8ff,
        0 0 20px #d1a8ff, 0 0 35px #d1a8ff, 0 0 40px #d1a8ff, 0 0 50px #d1a8ff,
        0 0 75px #d1a8ff;
    }
  }
`;

export const SignInBar = () => {
  return (
    <Bar>
      <ul>
        <li>
          {" "}
          <Link href="/signInPage">SIGN IN</Link>
        </li>
      </ul>
    </Bar>
  );
};
