import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

async function userLoginService({ email, password }: IUserLogin) {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  if (user.isActive == false) {
    throw new AppError("user is not active", 403);
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });

  return { token: token };
}

export default userLoginService;
