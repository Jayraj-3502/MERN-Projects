import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodoStatus,
  updateTodoTitle,
} from "../controllers/todo.controller";
import authMiddleware from "../middlewares/auth.middleware";

const todoRoutes = Router();

todoRoutes.get("/", authMiddleware, getTodos);
todoRoutes.post("/", authMiddleware, createTodo);
todoRoutes.delete("/:id", authMiddleware, deleteTodo);
todoRoutes.put("/title/:id", updateTodoTitle);
todoRoutes.put("/iscomplete/:id", updateTodoStatus);

export default todoRoutes;
