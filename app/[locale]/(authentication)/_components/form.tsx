"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "@/components/icons/index";
import { sendMagicLink } from "@/app/[locale]/(authentication)/_actions/magic-link";
import { useScopedI18n } from "@/locales/client";

export const Form = () => {
  const scopedT = useScopedI18n("authentication");
  return (
    <form className="w-full flex flex-col gap-4" action={sendMagicLink}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" name="email" />
      </div>
      <Button type="submit" className="w-full flex gap-1" size={"lg"}>
        {scopedT("form.continue")} <SparklesIcon />
      </Button>
    </form>
  );
};
