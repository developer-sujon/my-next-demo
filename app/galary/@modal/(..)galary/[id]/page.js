import Modal from "@/app/components/Modal";
import imageUrls from "@/lib/imageUrls";
import Image from "next/image";

function page({ params }) {
  const { id } = params;
  const photo = imageUrls.find((_p, i) => i == id);

  return (
    <Modal>
      <div className="w-1/2 mx-auto">
        {/* <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div> */}
        <Image
          alt={id}
          src={photo}
          className="w-full object-cover aspect-square "
          width={400}
          height={400}
        />
      </div>
    </Modal>
  );
}

export default page;
