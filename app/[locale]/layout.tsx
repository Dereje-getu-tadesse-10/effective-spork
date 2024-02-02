import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { Header } from "@/components/header";
import { getScopedI18n } from "@/locales/server";
const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = await getScopedI18n("home");

  return {
    title: t("title"),
    description: t("description"),
    robots: "follow, index",
  } satisfies Metadata;
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers locale={locale}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
