import FullPageImageView from "~/app/components/full-image";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
