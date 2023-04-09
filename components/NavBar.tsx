import Link from "next/link";
import styled from "styled-components";
export const Icon = styled.svg`
  fill: #d1a8ff;
`;
export const Nav = styled.nav`
  color: #d1a8ff;
  width: 100%;
  background-color: #2e2e2e;
  background-image: linear-gradient(to bottom, #2e2e2e, #454545);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0.5rem;
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
      cursor: pointer;
      position: relative;
      &:hover::before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #d1a8ff;
        animation: neon 0.5s infinite;
        z-index: 4;
      }
    }
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

export const NavBar = () => {
  return (
    <Nav>
      {" "}
      <ul>
        <li>
          <Link href="/">
            <Icon xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z" />
            </Icon>
          </Link>
        </li>
        <li>
          {" "}
          <Icon xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
          </Icon>
        </li>
        <li>
          {" "}
          <Icon xmlns="http://www.w3.org/2000/Icon" height="48" width="48">
            <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z" />
          </Icon>
        </li>
      </ul>
    </Nav>
  );
};
