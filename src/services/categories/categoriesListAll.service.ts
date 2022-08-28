import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"

async function categoriesListAllService() {
    const categorieRepository= AppDataSource.getRepository(Categories)
    const categories=await categorieRepository.find()
  
    return categories
}

export default categoriesListAllService