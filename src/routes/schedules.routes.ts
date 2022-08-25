import { Router } from "express";
import schedulesCreateController from "../controllers/schedules/schedulesCreate.controller";
import schedulesPropertiesListController from "../controllers/schedules/schedulesPropertiesList.controller";


const schedulesRouter= Router()

schedulesRouter.post('',schedulesCreateController)
schedulesRouter.get('/properties/:id',schedulesPropertiesListController)

export default schedulesRouter