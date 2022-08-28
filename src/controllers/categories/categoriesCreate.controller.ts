import { Request, Response } from "express";
import categoriesCreateService from "../../services/categories/categoriesCreate.service";

async function categoriesCreateController(req: Request, res: Response) {
  const { name } = req.body;
  const createCategory = await categoriesCreateService({ name });
  return res.status(201).json(createCategory);
}

export default categoriesCreateController;
