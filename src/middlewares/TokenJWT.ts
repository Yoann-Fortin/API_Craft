import UserConnectModel from '../models/UserConnectModel';
import jwt from "jsonwebtoken";

export default class TokenJWT {
  
  generateAccessToken(user: UserConnectModel) {
    console.log(jwt.sign(user, this.accessToken(), {expiresIn: '900s'}));
    return jwt.sign(user, this.accessToken(), {expiresIn: '900s'});
  };

  accessToken(): string {
    // Des problèmes avec le process.env et le package dotenv, je n'aime pas le mettre en dur mais pour une démo je passe outre 
    return "KEHxs(s,l|H|L&r9(TOU2v;H+n29IUt]Y14t:XF?;d+L$p~)1c4)9VI qeRO{qE*";
  };
};