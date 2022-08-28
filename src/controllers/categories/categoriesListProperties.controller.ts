import { Request, Response } from "express";
import categoriesListPropertiesService from "../../services/categories/categoriesListProperties.service";

async function categoriesListPropertiesController(req: Request, res: Response) {
  const id = req.params.id as string;
  const categories = await categoriesListPropertiesService(id);
  return res.status(200).json(categories);
}

export default categoriesListPropertiesController;
