import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries/disctionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_URL}/photos`);
  const photos = await response.json();

  return (
    <div>
      {/* {dictionary.followers} */}
      <PhotoList photos={photos} />
    </div>
  );
}
