const layout = ({ children, comments, posts }) => {
  return (
    <div>
      {children}
      <br />
      Header
      {posts}
      {comments}
      Footer
    </div>
  );
};

export default layout;
