const layout = ({ children, modal }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default layout;
