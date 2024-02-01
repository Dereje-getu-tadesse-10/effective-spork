import { AuthMessage } from "@/components/auth/auth-message";
import { Footer } from "@/components/auth/footer";
import { FormWrapper } from "@/components/auth/wrapper-form";

const Page = () => {
  return (
    <main className="container flex flex-col items-center justify-center h-screen">
      <section className="my-12 max-w-sm flex flex-col justify-center w-full mx-auto">
        <AuthMessage
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
