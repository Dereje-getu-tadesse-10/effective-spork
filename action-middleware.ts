import { createSafeActionClient } from "next-safe-action";
import { auth } from "@/lib/auth/auth";

export const authAction = createSafeActionClient({
  async middleware(parsedInput) {
    const session = await auth();

    if (!session) {
      throw new Error("Session not found!");
    }

    return {
      userId: session?.user?.id,
    };
  },
});
