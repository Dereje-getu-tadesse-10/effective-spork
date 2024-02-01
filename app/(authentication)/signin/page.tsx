import { AuthHeader } from "@/app/(authentication)/_components/auth-message";
import { Footer } from "@/app/(authentication)/_components/footer";
import { FormWrapper } from "@/app/(authentication)/_components/form-wrapper";

const Page = () => {
  return (
    <main className="container flex flex-col items-center justify-center h-screen">
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthHeader
          title="Welcome back"
          description="Welcome back! Please enter your details."
        />
        <FormWrapper />
        <Footer
          text="Do you have an account ?"
          title="Sign up"
          link="/signup"
        />
      </section>
    </main>
  );
};

export default Page;
