import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "./db";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  console.log(user.userId);
  const images = await db.query.image.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}
