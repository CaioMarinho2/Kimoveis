import "reflect-metadata";
import "express-async-errors";
import express from "express";
import categoriesRouter from "./routes/categories.routes";
import propertiesRouter from "./routes/properties.routes";
import schedulesRouter from "./routes/schedules.routes";
import usersRouter from "./routes/users.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/properties", propertiesRouter);
app.use("/schedules", schedulesRouter);
app.use("", usersRouter);
app.use(handleErrorMiddleware);

export default app;
