import Comment from "@/components/parallel/Comment";
import { getCommentsByPostId } from "@/utils/comments";
import { getPostById } from "@/utils/posts";
import Link from "next/link";
import { Suspense } from "react";

const Post: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);
  //   const postPromise = getPostById(id);
  const commentsPromise = getCommentsByPostId(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div>
      <h1>post information</h1>
      <Link href={"/sequential"}>Back to sequential posts</Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <h2>Comments</h2>
      <Suspense fallback={<div>Comments Loading........</div>}>
        <Comment commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default Post;
