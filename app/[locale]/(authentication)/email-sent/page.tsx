import Link from "next/link";
import { AuthHeader } from "@/app/[locale]/(authentication)/_components/auth-header";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";

const Page = async () => {
  const scopedT = await getScopedI18n("authentication");
  return (
    <main>
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
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
