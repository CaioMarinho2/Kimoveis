import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import userCreateService from "../../services/users/userCreate.service";

async function userCreateController(req: Request, res: Response) {
  const { name, email, password, isAdm } = req.body;

  const newUser = await userCreateService({ name, email, password, isAdm });

  return res.status(201).json(instanceToPlain(newUser));
}

export default userCreateController;
