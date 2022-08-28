import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

async function userListService() {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users;
}

export default userListService;
