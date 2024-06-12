import wait from "./wait";

export const getCommentsByPostId = async (id: String) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  if (!result.ok) {
    throw new Error("Comments can`t get success");
  }
  await wait(3000);
  return result.json();
};
