import FullPageImageView from "~/app/components/full-image";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  return <FullPageImageView id={idAsNumber} />;
}
