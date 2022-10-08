export const CommentList = (props) => {
  return (
    <>
      {props.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <span>{comment.author}</span>
            <span>{comment.body}</span>
          </div>
        );
      })}
    </>
  );
};
