export default class UserModel {
  readonly lastname: string;
  readonly firstname: string;
  readonly username: string;

  constructor (lastame: string, firstname: string, username: string) {
    this.lastname = lastame;
    this.firstname = firstname;
    this.username = username;
  };
};