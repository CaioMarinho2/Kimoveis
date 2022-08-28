import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { IUserToken } from "../interfaces/users";

async function verifyPermitionMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  const userID = jwt.decode(token) as IUserToken;

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const userInfos = users.find((user) => user.id === userID.id);

  if (!userInfos) {
    return res.status(401).json({ message: "invalid token" });
  }
  const isAdm = userInfos.isAdm;
  if (!isAdm) {
    return res
      .status(403)
      .json({ message: "Error, route requires admin authorization" });
  }

  next();
}

export default verifyPermitionMiddleware;
