import imageUrls from "@/lib/imageUrls";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
      {imageUrls.map((url, i) => (
        <Link href={`/galary/${i}`}>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={url}
            alt={i}
            width={400}
            height={400}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;
