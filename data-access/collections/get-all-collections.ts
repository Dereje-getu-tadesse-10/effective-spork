// "server-only";
import { prisma } from "@/lib/prisma";

export async function getCollections(userId: string | undefined) {
  const collections = await prisma.collection.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      userId: userId,
    },
  });

  return collections;
}
