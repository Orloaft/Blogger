import Link from "next/link";
import styled from "styled-components";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const SignInPageView = (props) => {
  return (
    <div>
      <Form onSubmit={props.submit}>
        EMAIL
        <input
          onChange={(e) => props.onChange(e, "email")}
          value={props.form.email}
          name="email"
        ></input>
        PASSWORD
        <input
          onChange={(e) => props.onChange(e, "password")}
          value={props.form.password}
          type="password"
          name="password"
        ></input>
        <button>Sign In</button>
      </Form>
      {props.message}
      <p>Dont have an account? </p>
      <Link href="/signUpPage">Sign up</Link>
      <Link href="/">Back</Link>
    </div>
  );
};
