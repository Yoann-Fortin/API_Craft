export default class UserModel {
  readonly lastname: string;
  readonly firstname: string;
  readonly username: string;
  readonly password: string;

  constructor (lastame: string, firstname: string, username: string, password: string) {
    this.lastname = lastame;
    this.firstname = firstname;
    this.username = username;
    this.password = password;
  };
};