import styled from "styled-components";
import { Button, Form, Input } from "./SignUpPageView";

export const PostWriteView = (props) => {
  return (
    <Form onSubmit={(e) => props.handleSubmit(e)}>
      <Input
        onChange={(e) => {
          props.handleChange(e, "title");
        }}
        name="title"
        value={`${props.form.title}`}
        placeholder="Title"
      ></Input>

      <textarea
        value={`${props.form.body}`}
        name="body"
        placeholder="content"
        onChange={(e) => {
          props.handleChange(e, "body");
        }}
      ></textarea>
      <Button>POST</Button>
    </Form>
  );
};
