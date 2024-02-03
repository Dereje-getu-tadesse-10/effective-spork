"use client";
import { ThemeToggle } from "@/app/theme-toggle";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useCollapse } from "@/stores/useCollapse";
import { SignOut, UserInfo } from "./user";
import { MenuContent } from "./sidebar-content";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useCollapse((state) => state.isOpen);
  const toggle = useCollapse((state) => state.toggle);

  return (
    <header className="relative p-2 flex justify-between items-center md:hidden">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={toggle}
        className="transition-none"
      >
        <MenuIcon />
      </Button>
      <div className="flex gap-1 items-center">
        <Button size={"sm"}>Ajouter</Button>
        <ThemeToggle />
      </div>
      {isOpen && <Navbar toggle={toggle}>{children}</Navbar>}
    </header>
  );
};

const Navbar = ({
  toggle,
  children,
}: {
  toggle: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className="absolute top-0 left-0  w-full h-screen bg-black/10"
        onClick={toggle}
      />
      <div className="absolute top-0 left-0 max-w-80 w-full h-screen flex flex-col bg-primary-foreground dark:bg-muted">
        <MenuContent desktop={false} toggle={toggle} children={children} />
      </div>
    </>
  );
};
