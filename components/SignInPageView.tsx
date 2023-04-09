import Link from "next/link";
import { Button, Form, Input } from "./SignUpPageView";
import { Bar } from "./SignInBar";
import { Nav } from "./NavBar";

export const SignInPageView = (props) => {
  return (
    <div className="container">
      <Form onSubmit={props.submit}>
        <Nav>
          <ul>
            {" "}
            <li>
              {" "}
              <Link href="/signUpPage">Sign up</Link>
            </li>
            <li>
              <Link href="/">Back</Link>
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
          onChange={(e) => props.onChange(e, "password")}
          value={props.form.password}
          type="password"
          name="password"
          placeholder="password"
        ></Input>
        <Bar>
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
        </Bar>
      </Form>
      {props.message}
    </div>
  );
};
