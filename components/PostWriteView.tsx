import styled from "styled-components";

const Form = styled.form`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 48rem) {
    padding-left: 3.5rem;
  }
`;

export const PostWriteView = (props) => {
  return (
    <Form onSubmit={(e) => props.handleSubmit(e)}>
      TITLE
      <input
        onChange={(e) => {
          props.handleChange(e, "title");
        }}
        name="title"
        value={`${props.form.title}`}
      ></input>
      CONTENT
      <textarea
        value={`${props.form.body}`}
        name="body"
        onChange={(e) => {
          props.handleChange(e, "body");
        }}
      ></textarea>
      <button>POST</button>
    </Form>
  );
};
