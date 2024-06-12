import Link from "next/link";

const Page = () => {
  return (
    <div>
      <button>
        <Link href={"/parallel"}>Parallel</Link>
      </button>
      <button>
        <Link href={"/sequential"}>Sequential</Link>
      </button>
    </div>
  );
};

export default Page;
