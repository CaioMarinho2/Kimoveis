import { Request,response,Response } from "express";
import jwt from "jsonwebtoken";
import { IUserToken } from "../../interfaces/users";
import schedulesCreateService from "../../services/schedules/schedulesCreate.service";

async function schedulesCreateController(req:Request,res:Response) {
    let token = req.headers.authorization;
   
    token = token!.split(" ")[1];
  
  const userId=jwt.decode(token) as string
    const{date,hour,propertyId}=req.body
    const creatSchedules= await schedulesCreateService({date,hour,propertyId,userId })
    return res.status(201).json(creatSchedules)

}

export default schedulesCreateController