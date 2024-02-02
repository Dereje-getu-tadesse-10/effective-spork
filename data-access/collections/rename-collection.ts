"server-only";
import { prisma } from "@/lib/prisma";

export async function renameCollection(id: string, name: string) {
  const collection = await prisma.collection.update({
    where: {
      id,
    },
    data: {
      title: name,
    },
  });

  if (!collection) {
    return undefined;
  }

  return collection;
}
