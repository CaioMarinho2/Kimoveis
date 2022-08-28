import { Router } from "express";
import propertiesCreateController from "../controllers/properties/propertiesCreate.controller";
import propertiesListController from "../controllers/properties/propertiesList.controller";
import verifyPermitionMiddleware from "../middlewares/verifyPermition.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";


const propertiesRouter= Router()

propertiesRouter.post('',verifyTokenMiddleware,verifyPermitionMiddleware,propertiesCreateController)
propertiesRouter.get('',propertiesListController)

export default propertiesRouter