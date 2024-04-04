import imageUrls from "@/lib/imageUrls";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const singleImg = imageUrls.find((_, i) => params.id == i);

  return (
    <div className="grid gap-4 p-20">
      <div>
        <Link
          href={"/galary"}
          className="mb-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block"
        >
          Back to galary
        </Link>

        <Image
          className="h-auto max-w-full rounded-lg"
          src={singleImg}
          alt={params.id}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default page;
