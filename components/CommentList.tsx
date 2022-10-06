export const CommentList = (props) => {
  return (
    <>
      {props.comments.map((comment) => {
        return (
          <div>
            <span>{comment.author}</span>
            <span>{comment.body}</span>
          </div>
        );
      })}
    </>
  );
};
