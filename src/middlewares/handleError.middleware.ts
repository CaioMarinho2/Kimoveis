import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export async function handleErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
 
  if (error instanceof AppError) {
  return   res.status(error.statusCode).json({ message: error.message });
  }
  if(error.message==='duplicate key value violates unique constraint "UQ_97672ac88f789774dd47f7c8be3"'||error.message==="SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email"){
    return res.status(400).json({message:"email is already in use "})
  }
  if(error.message==='duplicate key value violates unique constraint "UQ_8b0be371d28245da6e4f4b61878"'||error.message==="SQLITE_CONSTRAINT: UNIQUE constraint failed: categories.name"){
    return res.status(400).json({message:"there is already a category with that name"})
  }
  return res.status(500).json({message:"internal server error "})
}
