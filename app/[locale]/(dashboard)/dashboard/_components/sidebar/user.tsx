"use client";
// import { auth } from "@/lib/auth/auth";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const UserInfo = () => {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image;
  const name = session?.user?.name;

  return (
    <div className="flex items-center gap-1 px-4 py-2">
      <Avatar>
        {avatarUrl && <AvatarImage src={avatarUrl} alt={"User avatar"} />}
        <AvatarFallback>
          <span className="sr-only">{name}</span>
        </AvatarFallback>
      </Avatar>
      <p className="text-foreground truncate font-medium">{name}</p>
    </div>
  );
};

export const SignOut = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => signOut()}
      className="w-full"
    >
      Se deconnecter
    </Button>
  );
};
