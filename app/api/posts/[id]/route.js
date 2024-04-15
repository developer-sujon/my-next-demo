import { posts } from "@/data";

export async function GET(_request, { params }) {
  const findPost = await posts.find((post) => post.id === Number(params.id));

  return Response.json(findPost);
}

export async function PATCH(request, { params }) {
  const postBody = await request.json();

  const updatePostIndex = await posts.findIndex(
    (post) => post.id === Number(params.id)
  );

  posts[updatePostIndex].title = postBody.title;

  return Response.json(posts[updatePostIndex]);
}

export async function DELETE(_request, { params }) {
  const postIndex = await posts.findIndex(
    (post) => post.id === Number(params.id)
  );

  const postToDelete = posts[postIndex];
  posts.splice(postIndex, 1);

  return Response.json(postToDelete);
}
