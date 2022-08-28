import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";

async function schedulesPropertiesListService(id:string) {
    if (!id) {
        throw new AppError("invalid id", 400);
      }
      const propertiesRepository = await AppDataSource.getRepository(Properties);

      const properties = await propertiesRepository.findOne({
        where: { id: id },
        relations: { schedules: true },
      });
    
    
      if (!properties) {
        throw new AppError("properties not found", 404);
      }
    
      return properties;
}

export default schedulesPropertiesListService