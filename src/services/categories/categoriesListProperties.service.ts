import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

async function categoriesListPropertiesService(id: string) {
  if (!id) {
    throw new AppError("invalid id", 400);
  }
  const categoriesRepository = await AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.findOne({
    where: { id: id },
    relations: { properties: true },
  });

  if (!categories) {
    throw new AppError("categories not found", 404);
  }

  return categories;
}

export default categoriesListPropertiesService;
