import { Request, response, Response } from "express";
import jwt from "jsonwebtoken";
import { IScheduleToken } from "../../interfaces/schedules";
import schedulesCreateService from "../../services/schedules/schedulesCreate.service";

async function schedulesCreateController(req: Request, res: Response) {
  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  const userIdDecode = jwt.decode(token) as IScheduleToken;
  const userId = userIdDecode.id;
  const { date, hour, propertyId } = req.body;
  const creatSchedules = await schedulesCreateService({
    date,
    hour,
    propertyId,
    userId,
  });
  return res.status(201).json(creatSchedules);
}

export default schedulesCreateController;
