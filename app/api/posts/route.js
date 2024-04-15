import { posts } from "@/data";

export async function GET() {
  return Response.json(posts);
}

export async function POST(request) {
  const post = await request.json();
  const newPost = {
    id: posts.length + 1,
    title: post.title,
  };
  posts.push(newPost);
  return new Response(JSON.stringify(newPost), {
    headers: {
      status: 201,
    },
  });
}
