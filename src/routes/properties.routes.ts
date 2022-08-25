import { Router } from "express";
import propertiesCreateController from "../controllers/properties/propertiesCreate.controller";
import propertiesListController from "../controllers/properties/propertiesList.controller";


const propertiesRouter= Router()

propertiesRouter.post('',propertiesCreateController)
propertiesRouter.get('',propertiesListController)

export default propertiesRouter