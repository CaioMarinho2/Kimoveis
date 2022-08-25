import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";


const usersRouter= Router()

usersRouter.post('',userCreateController)
usersRouter.get('',userListController)
usersRouter.delete('/:id',userDeleteController)
usersRouter.post('/login',userLoginController)

export default usersRouter