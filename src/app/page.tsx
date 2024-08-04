import { db } from "~/server/db";

/* eslint-disable @next/next/no-img-element */

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const image = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  // console.log("posts :", posts);

  return (
    <main>
      <div className="flex flex-wrap">
        {image.map((image, index) => (
          <div className="flex w-48 flex-col p-4" key={index}>
            <img src={image.url} alt="" />
            <div className="">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
