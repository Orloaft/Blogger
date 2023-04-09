import Link from "next/link";
import styled from "styled-components";
import { Bar } from "./SignInBar";
import { Nav } from "./NavBar";

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  background-color: #ff6ec7;
  color: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(255, 110, 199, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 110, 199, 0.4);
  }
`;

export const Input = styled.input`
  background-color: #2e2e2e;
  background-image: linear-gradient(to bottom, #2e2e2e, #454545);
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  background-color: #fff;
  color: #ff6ec7;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(255, 110, 199, 0.3);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 15px 30px rgba(255, 110, 199, 0.4);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Input} {
    margin: 1rem 0rem;
  }

  ${Button} {
    margin-top: 2rem;
  }
`;
export const SignUpPageView = (props) => {
  return (
    <div className="container">
      <Form onSubmit={props.submit}>
        <Nav>
          <ul>
            <li>
              {" "}
              <button
                style={{
                  borderStyle: "none",
                  background: "transparent",
                  color: `#d1a8ff`,
                }}
                type="submit"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </Nav>
        <Input
          onChange={(e) => props.onChange(e, "email")}
          value={props.form.email}
          name="email"
          placeholder="email"
        ></Input>

        <Input
          onChange={(e) => props.onChange(e, "name")}
          value={props.form.username}
          name="username"
          placeholder="username"
        ></Input>

        <Input
          onChange={(e) => props.onChange(e, "password")}
          value={props.form.password}
          type="password"
          name="password"
          placeholder="password"
        ></Input>
        <Bar>
          <ul>
            {" "}
            <li>
              <Link href="/">Back</Link>
            </li>
          </ul>
        </Bar>
      </Form>
      {props.message}
    </div>
  );
};
