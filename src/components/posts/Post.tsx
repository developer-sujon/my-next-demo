import { getPosts } from "@/utils/posts";
import Link from "next/link"; // assuming you're using Next.js

interface PostProps {
  linkToRedirect: string;
}

const Posts: React.FC<PostProps> = async ({ linkToRedirect }) => {
  const posts = await getPosts();

  return (
    <ul>
      {posts?.length > 0
        ? posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`${linkToRedirect}/${post.id}`}>{post.title}</Link>{" "}
            </li>
          ))
        : "no posts found"}
    </ul>
  );
};

export default Posts;
