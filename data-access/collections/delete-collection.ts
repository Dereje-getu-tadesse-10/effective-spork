"server-only";
import { prisma } from "@/lib/prisma";

export async function getCollection(id: string) {
  const collection = await prisma.collection.delete({
    where: {
      id,
    },
  });

  if (!collection) {
    return undefined;
  }

  return collection;
}
