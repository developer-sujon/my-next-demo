const Comment = async (props: any) => {
  const comments = await props.commentsPromise;

  return (
    <ul>
      {comments?.length > 0
        ? comments.map((comment: any) => <li>{comment.body}</li>)
        : "Comments not found"}
    </ul>
  );
};

export default Comment;
