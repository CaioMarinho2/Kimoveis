import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"

async function verifyTokenMiddleware(req: Request,res: Response,next: NextFunction) {
 
  let token =req.headers.authorization

  
  if (!token) {
    return res.status(401).json({ message: "missing token." });
  }
  token = token.split(" ")[1];

  jwt.verify(token,  process.env.SECRET_KEY as string , (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "invalid token." });
    }

    next();
  });
}


export default verifyTokenMiddleware;
