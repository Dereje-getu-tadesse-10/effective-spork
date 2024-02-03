import { getCollections } from "@/data-access/collections/get-all-collections";
import { auth } from "@/lib/auth/auth";
import Link from "next/link";
import { FolderClosed } from "lucide-react";
import { MenuList } from "./menu-list";

export const Menu = async () => {
  const session = await auth();
  const items = await getCollections(session?.user?.id);
  return (
    <div>
      <MenuList menu={items} />
    </div>
  );
};
