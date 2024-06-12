import wait from "./wait";

export const getPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!result.ok) {
    throw new Error("Posts can`t get success");
  }

  return result.json();
};

export const getPostById = async (id: String) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("Post can`t get success");
  }

  await wait(1000);

  return result.json();
};
