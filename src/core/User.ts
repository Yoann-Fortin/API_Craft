import listUsers from "../database/FakeDatabase";
import UserModel from "../models/UserModel";
import UserLoginModel from "../models/UserLoginModel";
import UserConnectModel from "../models/UserConnectModel";

export default class User {

  add(user: UserModel): Boolean {
    const currentUser: UserModel = new UserModel(
      user.lastname,
      user.firstname,
      user.username,
      user.password
    );

    listUsers.push(currentUser);

    return this.getUsername(user.username);
  };

  getUsername(username: String): Boolean {
    return listUsers.find(u => u.username === username) !== undefined;
  }

  getUser(username: String): UserConnectModel {
    const user = listUsers.find(u => u.username === username);
    return new UserConnectModel(user!.lastname, user!.firstname, user!.username)
  };

  login(user: UserLoginModel): Boolean {
    const currentUser = listUsers.find(u => u.username === user.username);
    return (currentUser !== undefined && currentUser.password === user.password);
  };
};