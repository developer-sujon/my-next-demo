const layout = ({ children, comments, posts }) => {
  return (
    <div>
      Header
      {posts}
      {comments}
      Footer
    </div>
  );
};

export default layout;
