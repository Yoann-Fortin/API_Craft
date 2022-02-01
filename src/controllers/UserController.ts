import ErrorsMessages from "../messages/ErrorsMessages";
import SuccessMessages from "../messages/SuccessMessages";
import UserModel from "../models/UserModel";
import UserLoginModel from "../models/UserLoginModel";
import User from "../core/User";
import listUsers from "../database/FakeDatabase";

export default class UserController {
  errorsMessages: ErrorsMessages = new ErrorsMessages();
  successMessages: SuccessMessages = new SuccessMessages();
  userCore: User = new User();

  add(user: UserModel): String {
    if(user.lastname.trim().length < 2) {
      return this.errorsMessages.lastnameTooShort();
    }
    if(user.firstname.trim().length < 2) {
      return this.errorsMessages.firstnameTooShort();
    }
    if(user.username.trim().length < 2) {
      return this.errorsMessages.usernameTooShort();
    }
    if(user.password.trim() === "") {
      return this.errorsMessages.passwordError();
    }
    if(this.userCore.getUsername(user.username)) {
      return this.errorsMessages.usernameAlreadyExist();
    }

    const currentUser = new UserModel(user.lastname, user.firstname, user.username, user.password);
    listUsers.push(currentUser);

    if(this.userCore.getUsername(user.username)) {
      return this.successMessages.createUser();
    } else {
      return this.errorsMessages.failCreateUser();
    }
  };

  login(user: UserLoginModel): String {
    if(this.userCore.login(user)) {
      return this.successMessages.loggedUser();
    }
    return this.errorsMessages.wrongUsernameOrPasssword();
  };
};