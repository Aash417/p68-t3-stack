export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div className="">{photoId}</div>;
}