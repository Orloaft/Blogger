import Link from "next/link";
import styled from "styled-components";
import { Button, Form, Input } from "./SignUpPageView";

export const SignInPageView = (props) => {
  return (
    <div className="container">
      <Form onSubmit={props.submit}>
        EMAIL
        <Input
          onChange={(e) => props.onChange(e, "email")}
          value={props.form.email}
          name="email"
        ></Input>
        PASSWORD
        <Input
          onChange={(e) => props.onChange(e, "password")}
          value={props.form.password}
          type="password"
          name="password"
        ></Input>
        <Button>Sign In</Button>
      </Form>
      {props.message}
      <p>Dont have an account? </p>
      <Button>
        {" "}
        <Link href="/signUpPage">Sign up</Link>
      </Button>
      <Button>
        <Link href="/">Back</Link>
      </Button>
    </div>
  );
};
