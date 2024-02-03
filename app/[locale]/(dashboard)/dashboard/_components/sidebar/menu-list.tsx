"use client";

import { FolderClosed } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import clsx from "clsx";
export const MenuList = ({ menu }: { menu: any }) => {
  const segment = useSelectedLayoutSegments();
  return (
    <ul>
      {menu.map((item: { id: string; title: string }) => (
        <li key={item.id}>
          <Link
            href={`/dashboard/${item.id}`}
            className={clsx(
              `flex items-center gap-1 px-4 py-2 text-sm text-foreground`,
              {
                "bg-primary": segment[0] === item.id,
              }
            )}
          >
            <FolderClosed size={20} /> {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
