import { Router } from "express";
import categoriesCreateController from "../controllers/categories/categoriesCreate.controller";
import categoriesListPropertiesController from "../controllers/categories/categoriesListProperties.controller";

const categoriesRouter= Router()

categoriesRouter.post('',categoriesCreateController)
categoriesRouter.get('/:id/properties',categoriesListPropertiesController)


export default categoriesRouter