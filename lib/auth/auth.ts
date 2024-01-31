import NextAuth from "next-auth";
import { config } from "@/lib/auth/config";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
  unstable_update,
} = NextAuth(config);
