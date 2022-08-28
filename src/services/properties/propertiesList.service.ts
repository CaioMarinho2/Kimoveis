import { Properties } from "../../entities/properties.entity";
import AppDataSource from "../../data-source";

async function propertiesListService() {
  const propertieRepository = AppDataSource.getRepository(Properties);

  const properties = await propertieRepository.find();
  return properties;
}

export default propertiesListService;
