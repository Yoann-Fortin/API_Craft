export default class ErrorsMessages {
  lastnameTooShort (): String {
    return "Le champ nom doit être correctement renseigné";
  };

  firstnameTooShort (): String {
    return "Le champ prénom doit être correctement renseigné";
  };

  usernameTooShort (): String {
    return "Le champ nom d'utilisateur doit être correctement renseigné";
  };

  passwordError (): String {
    return "Le champ mot de passe doit être renseigné";
  };

  usernameAlreadyExist (): String {
    return "Ce login n'est pas disponible";
  };

  failCreateUser (): String {
    return "L'utilisateur n'a pas pu être enregistré";
  }

  wrongUsernameOrPasssword(): String {
    return "Le nom d'utilisateur ou le mot de passe est erroné";
  };

  badToken(): String {
    return "Vous n'avez pas la permission";
  };
};