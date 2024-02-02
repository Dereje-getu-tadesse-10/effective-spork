"use client";
import { useI18n, useScopedI18n } from "@/locales/client";

export const AuthDivider = () => {
  const scopedT = useScopedI18n("authentication");
  return (
    <div className="relative my-7">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          {scopedT("oAuth.or")}
        </span>
      </div>
    </div>
  );
};
