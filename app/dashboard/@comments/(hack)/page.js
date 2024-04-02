import { delay } from "@/lib/delay";
import Link from "next/link";

const page = async () => {
  await delay(5000);
  return (
    <div>
      comments page
      <Link href="/dashboard/view">view</Link>
    </div>
  );
};

export default page;
