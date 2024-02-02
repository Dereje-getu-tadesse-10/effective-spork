"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { I18nProviderClient } from "@/locales/client";

export const Providers = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </I18nProviderClient>
  );
};
