import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";

async function userDeleteService(id: string) {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const userDelet = users.find((user) => user.id === id);
  if (!userDelet) {
    throw new AppError("Invalid id", 404);
  }
  if (userDelet.isActive == false) {
    throw new AppError("user is not active", 400);
  }

  const deletUser=await userRepository.update(userDelet.id, {isActive:false})
  return  deletUser
}

export default userDeleteService;
