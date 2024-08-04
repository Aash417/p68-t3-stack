import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

/* eslint-disable @next/next/no-img-element */

export const dynamic = "force-dynamic";

async function Images() {
  const image = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap">
      {image.map((image, index) => (
        <div className="flex w-48 flex-col p-4" key={index}>
          <img src={image.url} alt="" />
          <div className="">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
