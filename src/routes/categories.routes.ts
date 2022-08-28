import { Router } from "express";
import categoriesCreateController from "../controllers/categories/categoriesCreate.controller";
import categoriesListAllController from "../controllers/categories/categoriesListAll.controller";
import categoriesListPropertiesController from "../controllers/categories/categoriesListProperties.controller";
import verifyPermitionMiddleware from "../middlewares/verifyPermition.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  verifyTokenMiddleware,
  verifyPermitionMiddleware,
  categoriesCreateController
);
categoriesRouter.get("", categoriesListAllController);
categoriesRouter.get("/:id/properties", categoriesListPropertiesController);

export default categoriesRouter;
