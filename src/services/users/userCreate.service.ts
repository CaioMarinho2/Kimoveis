import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserRequest, IUser } from "../../interfaces/users";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/AppError";

async function userCreateService({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) {
  if (!name || !email || !password || isAdm === undefined) {
    throw new AppError("missing argument", 400);
  }

  const userRepository = AppDataSource.getRepository(User);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = bcrypt.hashSync(password, 10);
  newUser.isAdm = isAdm;

  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
}

export default userCreateService;
