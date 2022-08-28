import { Request, Response } from "express";
import userLoginService from "../../services/users/userLogin.service";

async function userLoginController(req: Request, res: Response) {
  const { email, password } = req.body;
  const userLogado = await userLoginService({ email, password });
  return res.status(200).json(userLogado);
}

export default userLoginController;
