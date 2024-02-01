import Link from "next/link";
import { AuthHeader } from "../_components/auth-message";
import { buttonVariants } from "@/components/ui/button";

const Page = () => {
  return (
    <main>
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthHeader
          title="Magic link sent !"
          description="Please check your email to sign in to your account."
        />
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "w-min self-center",
          })}
        >
          Go to home page
        </Link>
      </section>
    </main>
  );
};

export default Page;
