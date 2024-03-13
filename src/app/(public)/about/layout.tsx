const layout = ({ children }) => {
  return (
    <main className="my-0 py-16">
      <h1>about head</h1>
      {children}
      <h1>about footer</h1>
    </main>
  );
};

export default layout;
