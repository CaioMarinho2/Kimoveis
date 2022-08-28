import { Request,Response } from "express";
import categoriesListAllService from "../../services/categories/categoriesListAll.service";

async function categoriesListAllController(req:Request,res:Response) {
    const categories =await categoriesListAllService()
    return res.status(200).json(categories)
}

export default categoriesListAllController