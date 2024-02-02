"server-only";
import { prisma } from "@/lib/prisma";

export async function createCollection(title: string, userId: string) {
  const collection = await prisma.collection.create({
    data: {
      title: title,
      userId: userId,
    },
  });

  return collection;
}
