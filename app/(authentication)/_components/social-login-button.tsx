"use client";
import { signIn } from "next-auth/react";
import { GoogleIcon, SpotifyIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const SocialLoginButton = () => (
  <div className="flex flex-col gap-3">
    <Button
      variant={"outline"}
      className="flex gap-2"
      size={"lg"}
      onClick={() => signIn("google")}
    >
      <GoogleIcon />
      Continue with Google
    </Button>
    <Button
      variant={"outline"}
      className="flex gap-2"
      size={"lg"}
      onClick={() => signIn("spotify")}
    >
      <SpotifyIcon />
      Continue with Spotify
    </Button>
  </div>
);
