import { SocialLoginButton } from "@/components/auth/social-login-button";
import { Form } from "@/components/auth/form";
import { AuthDivider } from "@/components/auth/auth-divider";

export const FormWrapper = () => {
  return (
    <>
      <Form />
      <AuthDivider />
      <SocialLoginButton />
    </>
  );
};
