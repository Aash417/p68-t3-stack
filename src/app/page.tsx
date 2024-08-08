import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

/* eslint-disable @next/next/no-img-element */

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div className="flex flex-col p-4" key={index}>
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} width={400} height={400} alt={image.name} />
          </Link>
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
