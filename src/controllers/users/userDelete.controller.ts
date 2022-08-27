import { Request,Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";

async function userDeleteController(req:Request,res:Response) {
    const id= req.params.id
   
    const  updatedUser= await userDeleteService(id)

    return res.status(204).json({message:"user deleted with sucess"})
}

export default userDeleteController