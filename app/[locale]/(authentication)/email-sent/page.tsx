import Link from "next/link";
import { AuthHeader } from "@/app/[locale]/(authentication)/_components/auth-header";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";

import { Metadata } from "next";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = await getScopedI18n("authentication.seo");

  return {
    title: t("emailSent.title"),
    description: t("emailSent.description"),
  } satisfies Metadata;
};

const Page = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  const scopedT = await getScopedI18n("authentication");
  return (
    <main>
      <section className="py-24 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthHeader
          title={scopedT("emailSent.title")}
          description={scopedT("emailSent.description")}
        />
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "w-min self-center",
          })}
        >
          {scopedT("home")}
        </Link>
      </section>
    </main>
  );
};

export default Page;
