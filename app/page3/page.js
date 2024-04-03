import Link from "next/link";

const page = () => {
  return (
    <div>
      page 3
      <br />
      <br />
      <Link href={"/page2"}>go to page 2</Link>
    </div>
  );
};

export default page;
