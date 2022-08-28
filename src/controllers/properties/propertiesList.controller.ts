import { Request, Response } from "express";
import propertiesListService from "../../services/properties/propertiesList.service";

async function propertiesListController(req: Request, res: Response) {
  const properties = await propertiesListService();
  return res.status(200).json(properties);
}

export default propertiesListController;
