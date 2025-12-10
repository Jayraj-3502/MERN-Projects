import express, {
  json,
  urlencoded,
  type Request,
  type Response,
} from "express";
import authRoutes from "../routes/auth.routes";
import userRoutes from "../routes/user.routes";
import todoRoutes from "../routes/todo.routes";
import filterRoutes from "../routes/filter.routes";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/todo", todoRoutes);
app.use("/api/v1/filter", filterRoutes);

export default app;
