import Link from "next/link";
import styled from "styled-components";
const Icon = styled.svg`
  &:hover {
    background: #f0bb80;
  }
`;
const Nav = styled.nav`
  position: fixed;
  background-color: #e8d8d8;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.25rem;
  @media (min-width: 48rem) {
    flex-direction: column;
    left: 0;
    width: auto;
    height: 100%;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      {" "}
      <Link href="/">
        <Icon xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z" />
        </Icon>
      </Link>
      <Icon xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
      </Icon>
      <Icon xmlns="http://www.w3.org/2000/Icon" height="48" width="48">
        <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z" />
      </Icon>
    </Nav>
  );
};
