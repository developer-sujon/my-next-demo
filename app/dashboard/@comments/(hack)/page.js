import { delay } from "@/lib/delay";

const page = async () => {
  await delay(5000);
  return <div>comments page</div>;
};

export default page;
