import { AuthMessage } from "@/components/auth/auth-message";
import { Footer } from "@/components/auth/footer";
import { FormWrapper } from "@/components/auth/wrapper-form";

const Page = () => {
  return (
    <main className="container flex flex-col items-center justify-center h-screen">
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthMessage
          title="Sign up"
          description="Sign up! Please enter your details."
        />
        <FormWrapper />
        <Footer
          text="Already have an account ?"
          title="Sign In"
          link="/signin"
        />
      </section>
    </main>
  );
};

export default Page;
