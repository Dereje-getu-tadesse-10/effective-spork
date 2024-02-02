"use client";
import { signIn } from "next-auth/react";
import { GoogleIcon, SpotifyIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
export const SocialLoginButton = () => {
  const scopedT = useScopedI18n("authentication");

  return (
    <div className="flex flex-col gap-3">
      <Button
        variant={"outline"}
        className="flex gap-2"
        size={"lg"}
        onClick={() => signIn("google")}
      >
        <GoogleIcon />
        {scopedT("oAuth.signIn", { provider: "Google" })}
      </Button>
      <Button
        variant={"outline"}
        className="flex gap-2"
        size={"lg"}
        onClick={() => signIn("spotify")}
      >
        <SpotifyIcon />
        {scopedT("oAuth.signIn", { provider: "Spotify" })}
      </Button>
    </div>
  );
};
