import Link from "next/link";

const page = () => {
  return (
    <div>
      contact
      <br />
      <br />
      <Link href={"/page1"}>go to page 1</Link>
    </div>
  );
};

export default page;
