import { Request, Response } from "express";
import schedulesPropertiesListService from "../../services/schedules/schedulesPropertiesList.service";

async function schedulesPropertiesListController(req: Request, res: Response) {
  const id = req.params.id as string;
  const schedules = await schedulesPropertiesListService(id);
  return res.status(200).json(schedules);
}

export default schedulesPropertiesListController;
