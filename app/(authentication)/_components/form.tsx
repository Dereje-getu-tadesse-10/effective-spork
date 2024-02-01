"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "@/components/icons/index";
import { sendMagicLink } from "@/app/(authentication)/_actions/magic-link";

export const Form = () => {
  return (
    <form className="w-full flex flex-col gap-4" action={sendMagicLink}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" name="email" />
      </div>
      <Button type="submit" className="w-full flex gap-1" size={"lg"}>
        Continue with Email <SparklesIcon />
      </Button>
    </form>
  );
};
