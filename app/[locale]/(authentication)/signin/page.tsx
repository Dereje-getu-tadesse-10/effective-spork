import { AuthHeader } from "@/app/[locale]/(authentication)/_components/auth-header";
import { Footer } from "@/app/[locale]/(authentication)/_components/footer";
import { FormWrapper } from "@/app/[locale]/(authentication)/_components/form-wrapper";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = await getScopedI18n("authentication.seo");

  return {
    title: t("signIn.title"),
    description: t("signIn.description"),
  } satisfies Metadata;
};

const Page = async () => {
  const scopedT = await getScopedI18n("authentication");
  return (
    <main className="container flex flex-col items-center justify-center h-screen">
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthHeader
          title={scopedT("signIn.title")}
          description={scopedT("signIn.description")}
        />
        <FormWrapper />
        <Footer
          text={scopedT("signIn.haveAnAccount")}
          title={scopedT("signIn.signUp")}
          link="/signup"
        />
      </section>
    </main>
  );
};

export default Page;
