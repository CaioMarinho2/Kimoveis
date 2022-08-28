import { Request,Response } from "express";
import propertiesCreateService from "../../services/properties/propertiesCreate.service";

async function propertiesCreateController(req:Request,res:Response) {
    const {value,size,address,categoryId}=req.body
    const createdPropertie=await propertiesCreateService( {value,size,address,categoryId})
    return res.status(201).json(createdPropertie)
}

export default propertiesCreateController