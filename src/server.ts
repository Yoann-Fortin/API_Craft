import express, { Application, Request, Response, NextFunction } from "express";
import UserMiddleware from "./middlewares/UserMiddleware";

const server: Application = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true}));

const auth = new UserMiddleware();

server.post("/api/users", (req: Request, res: Response) => {
  new UserMiddleware().createUser(req, res);
});

server.post("/api/user", (req: Request, res: Response) => {
  new UserMiddleware().connectUser(req, res);
});

server.listen(3000);

export default server;