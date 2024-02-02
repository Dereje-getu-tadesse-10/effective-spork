import { SocialLoginButton } from "@/app/[locale]/(authentication)/_components/social-login-button";
import { Form } from "@/app/[locale]/(authentication)/_components/form";
import { AuthDivider } from "@/app/[locale]/(authentication)/_components/auth-divider";

export const FormWrapper = () => {
  return (
    <>
      <Form />
      <AuthDivider />
      <SocialLoginButton />
    </>
  );
};
