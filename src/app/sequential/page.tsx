import Posts from "@/components/posts/Post";

const Sequential = async () => {
  return (
    <div>
      Sequential Posts
      <Posts linkToRedirect="/sequential" />
    </div>
  );
};

export default Sequential;
