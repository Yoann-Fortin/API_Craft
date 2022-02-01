import { NextFunction, Request, Response } from "express";
import UserController from "../controllers/UserController";
import SuccessMessages from "../messages/SuccessMessages";
import TokenJWT from "./TokenJWT";
import User from "../core/User";
import jwt from "jsonwebtoken";
import ErrorsMessages from "../messages/ErrorsMessages";
import UserConnectModel from "../models/UserConnectModel";

export default class UserMiddleware {
  createUser (req: Request, res: Response) {
    const result = new UserController().add(req.body);

    switch (result) {
    case new SuccessMessages().createUser():
      return res.status(201).send({"message": result});
    case new ErrorsMessages().failCreateUser():
      return res.status(500).send({"message": result});
    default:
      return res.status(401).send({"message": result});
    }
  };

  connectUser(req: Request, res: Response) {
    const result = new UserController().login(req.body);
    if(result === new SuccessMessages().loggedUser()) {
      const user: UserConnectModel = new User().getUser(req.body.username);
      const accessToken = new TokenJWT().generateAccessToken(user);
      console.log(accessToken);
      return res.status(200).send({accessToken ,"message": result});
    };
    return res.status(403).send({"message": result});
  };

  authUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
      return res.status(403).send({"message": new ErrorsMessages().badToken()});
    }
    jwt.verify(token, new TokenJWT().accessToken(), (err, user) => {
      if(err) {
        return res.status(403).send({"message": new ErrorsMessages().badToken()});
      }
      req.body.user = new User().getUser(req.body.username);
      next();
    });
  };
};
