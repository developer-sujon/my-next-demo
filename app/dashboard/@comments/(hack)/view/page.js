import Link from "next/link";

const page = () => {
  return (
    <div>
      comments view
      <Link href="/dashboard">Back to comments list</Link>
    </div>
  );
};

export default page;
