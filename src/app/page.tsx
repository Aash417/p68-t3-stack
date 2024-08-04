import { db } from "~/server/db";

/* eslint-disable @next/next/no-img-element */
const mockUrl = [
  "https://utfs.io/f/f20dc5e1-91d9-449a-89a7-a554354fbe81-3c8pri.jpg",
  "https://utfs.io/f/008784a1-02d4-4524-b26e-b53430488a46-jms50v.jpg",
];

const mockImgs = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts :", posts);

  return (
    <main>
      <div className="flex flex-wrap">
        {[...mockImgs, ...mockImgs, ...mockImgs].map((image, index) => (
          <div className="w-48 p-4" key={index}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
