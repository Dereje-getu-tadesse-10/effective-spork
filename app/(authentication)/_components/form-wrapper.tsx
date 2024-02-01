import { SocialLoginButton } from "@/app/(authentication)/_components/social-login-button";
import { Form } from "@/app/(authentication)/_components/form";
import { AuthDivider } from "@/app/(authentication)/_components/auth-divider";

export const FormWrapper = () => {
  return (
    <>
      <Form />
      <AuthDivider />
      <SocialLoginButton />
    </>
  );
};
