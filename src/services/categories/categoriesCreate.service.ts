import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

async function categoriesCreateService({name}:ICategoryRequest) {
    if(!name){
        throw new AppError("missing argument",400);
    }

    const categoriesRepository= AppDataSource.getRepository(Categories)

    const newCategory= new Categories()
    newCategory.name = name;

    categoriesRepository.create(newCategory)

    await categoriesRepository.save(newCategory)

    return newCategory
}

export default categoriesCreateService