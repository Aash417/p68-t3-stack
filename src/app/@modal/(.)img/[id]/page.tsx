import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);

  return (
    <div className="">
      <img src={image.url} alt="" className="w-48" />
    </div>
  );
}
