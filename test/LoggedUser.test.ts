import UserLoginModel from "../src/models/UserLoginModel";
import UserController from "../src/controllers/UserController";
import ErrorsMessages from "../src/messages/ErrorsMessages";
import SuccessMessages from "../src/messages/SuccessMessages";

describe('Logged User', () => {
  it("should connect user with good username and password", () => {
    const user: UserLoginModel = new UserLoginModel("FooBar1", "azerty");

    const logged = new UserController();

    expect(logged.login(user)).toBe(new SuccessMessages().loggedUser());
  });

  it("shouldn't connect user if username is wrong", () => {
    const user: UserLoginModel = new UserLoginModel("FooBar", "azerty");

    const logged = new UserController();

    expect(logged.login(user)).toBe(new ErrorsMessages().wrongUsernameOrPasssword());
  });

  it("shouldn't connect user if password is wrong", () => {
    const user: UserLoginModel = new UserLoginModel("FooBar1", "azety");

    const logged = new UserController();

    expect(logged.login(user)).toBe(new ErrorsMessages().wrongUsernameOrPasssword());
  });
});