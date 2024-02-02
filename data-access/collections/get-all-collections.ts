"server-only";
import { prisma } from "@/lib/prisma";

export async function getCollections() {
  const collections = await prisma.collection.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return collections;
}
