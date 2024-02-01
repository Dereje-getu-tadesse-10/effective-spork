"use server";
import { signIn } from "@/lib/auth/auth";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const action = createSafeActionClient();

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
});

export const sendMagicLink = action(schema, async ({ email }) => {
  await signIn("email", {
    email,
  });
});
