import { Router } from "express";
import schedulesCreateController from "../controllers/schedules/schedulesCreate.controller";
import schedulesPropertiesListController from "../controllers/schedules/schedulesPropertiesList.controller";
import verifyPermitionMiddleware from "../middlewares/verifyPermition.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";


const schedulesRouter= Router()

schedulesRouter.post('',schedulesCreateController)
schedulesRouter.get('/properties/:id',verifyTokenMiddleware,verifyPermitionMiddleware,schedulesPropertiesListController)

export default schedulesRouter