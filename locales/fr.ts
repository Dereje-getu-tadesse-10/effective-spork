export default {
  authentication: {
    signIn: {
      title: "Bienvenue",
      description: "Bienvenue ! Veuillez entrer vos informations.",
      haveAnAccount: "Vous n'avez pas de compte ?",
      signUp: "S'inscrire",
    },
    signUp: {
      title: "S'inscrire",
      description: "S'inscrire ! Veuillez entrer vos informations.",
      haveAnAccount: "Vous avez un compte ?",
      signIn: "Se connecter",
    },
    emailSent: {
      title: "Lien de connexion envoyé !",
      description:
        "Veuillez veiller consulter votre email pour vous connecter.",
    },
    oAuth: {
      or: "Ou continuez avec",
      signIn: "Se connecter avec {provider}",
    },
    form: {
      email: "Email",
      continue: "Continuer avec Email",
    },
    home: "Aller à la page d'accueil",
  },
} as const;
