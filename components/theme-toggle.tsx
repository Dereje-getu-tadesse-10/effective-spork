"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={toggle}
      className="transition-none"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
};
