import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import verifyPermitionMiddleware from "../middlewares/verifyPermition.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const usersRouter = Router();

usersRouter.post("/users", userCreateController);
usersRouter.get(
  "/users",
  verifyTokenMiddleware,
  verifyPermitionMiddleware,
  userListController
);
usersRouter.delete(
  "/users/:id",
  verifyTokenMiddleware,
  verifyPermitionMiddleware,
  userDeleteController
);
usersRouter.post("/login", userLoginController);

export default usersRouter;
