import { Button, Form, Input } from "./SignUpPageView";

export const AccountSettingsView = (props) => {
  switch (props.option) {
    case "default":
      return (
        <>
          <Button onClick={() => props.setOption("changePassword")}>
            change password
          </Button>
          <Button onClick={() => props.setOption("deleteAccount")}>
            delete account
          </Button>
        </>
      );
    case "changePassword":
      return (
        <Form onSubmit={(e) => props.handlePasswordChange(e)}>
          <p>old password</p>
          <Input name="oldPw"></Input>
          <p>new password</p>
          <Input name="newPw"></Input>
          <Button type="submit">change password</Button>
          <Button onClick={() => props.setOption("default")}>back</Button>
        </Form>
      );
    case "deleteAccount":
      return (
        <>
          <p>Are you sure you want to delete this account?</p>
          <Button onClick={props.handleDelete}>yes</Button>{" "}
          <Button onClick={() => props.setOption("default")}>no</Button>
        </>
      );
  }
};
