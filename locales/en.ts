export default {
  authentication: {
    signIn: {
      title: "Welcome back",
      description: "Welcome back! Please enter your details.",
      haveAnAccount: "Do you have an account ?",
      signUp: "Sign up",
    },
    signUp: {
      title: "Sign up",
      description: "Sign up! Please enter your details.",
      haveAnAccount: "Already have an account ?",
      signIn: "Sign in",
    },
    emailSent: {
      title: "Magic link sent !",
      description: "Please check your email to sign in to your account.",
    },
    oAuth: {
      or: "Or continue with",
      signIn: "Sign in with {provider}",
    },
    form: {
      email: "Email",
      continue: "Continue with Email",
    },
    home: "Go to home page",
  },
} as const;
