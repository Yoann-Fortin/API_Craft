import UserModel from '../src/models/UserModel';
import UserController from '../src/controllers/UserController';
import listUsers from '../src/database/FakeDatabase';
import ErrorsMessages from '../src/messages/ErrorsMessages';
import SuccessMessages from '../src/messages/SuccessMessages';

describe('Create User', () => {
  it('should create a User with good infos', () => {
    const user: UserModel = new UserModel("First",  "User", "user1", "azerty");
    
    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new SuccessMessages().createUser());

    addUser.add(user);

    expect(listUsers).toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "User",
      "username": "user1",
      "password": "azerty"
    }
    ]); 

    listUsers.splice(1, 2);
  });

  it('shouldn\'t create a User if lastame is empty', () => {
    const user: UserModel = new UserModel("", "User", "user1", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().lastnameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "",
      "firstname": "User",
      "username": "user1",
      "password": "azerty"
    }]);
  });

  it('shouldn\'t create a User if firstname is empty', () => {
    const user: UserModel = new UserModel("First", "", "user1", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().firstnameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "",
      "username": "user1",
      "password": "azerty"
    }]);
  });

  it('shouldn\'t create a User if username is empty', () => {
    const user: UserModel = new UserModel("First", "User", "", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().usernameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "User",
      "username": "",
      "password": "azerty"
    }]);
  });
  it('shouldn\'t create a User if username is empty', () => {
    const user: UserModel = new UserModel("First", "User", "user1", "");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().passwordError());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "User",
      "username": "user1",
      "password": ""
    }]);
  });

  it('shouldn\'t create a User if lastname is too short', () => {
    const user: UserModel = new UserModel("F", "User", "user1", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().lastnameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "F",
      "firstname": "User",
      "username": "user1",
      "password": "azerty"
    }]);
  });

  it('shouldn\'t create a User if firstname is too short', () => {
    const user: UserModel = new UserModel("First", "U", "user1", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().firstnameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "U",
      "username": "user1",
      "password": "azerty"
    }]);
  });

  it('shouldn\'t create a User if username is too short', () => {
    const user: UserModel = new UserModel("First", "User", "u", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().usernameTooShort());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "First",
      "firstname": "User",
      "username": "u",
      "password": "azerty"
    }]);
  });

  it('shouldn\'t create a User if username already exist in database', () => {
    const user: UserModel = new UserModel("Foo", "Bar", "FooBar1", "azerty");

    const addUser = new UserController();

    expect(addUser.add(user)).toBe(new ErrorsMessages().usernameAlreadyExist());

    addUser.add(user);

    expect(listUsers).not.toMatchObject([{
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    },
    {
      "lastname": "Foo",
      "firstname": "Bar",
      "username": "FooBar1",
      "password": "azerty"
    }]);
    listUsers.splice(1, 2);
  });
});
