"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useCollapse } from "@/stores/useCollapse";
import clsx from "clsx";
import { SignOut, UserInfo } from "./user";
import { MenuContent } from "./sidebar-content";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const toggle = useCollapse((state) => state.toggle);
  return (
    <aside className="hidden md:flex md:fixed md:top-0 md:left-0 md:h-screen md:bg-primary-foreground md:max-w-80 md:w-full md:flex-col">
      <MenuContent desktop children={children} />
    </aside>
  );
};
