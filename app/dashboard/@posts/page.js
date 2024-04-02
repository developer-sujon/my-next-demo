import { delay } from "@/lib/delay";

const page = async () => {
  await delay(3000);
  return <div>post page</div>;
};

export default page;
