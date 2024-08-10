/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-3/4 flex-shrink items-center justify-center">
        <img src={image.url} alt="" className="object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{userInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
