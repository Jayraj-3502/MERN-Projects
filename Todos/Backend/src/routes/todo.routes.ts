import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodoData,
  updateTodoStatus,
} from "../controllers/todo.controller";
import authMiddleware from "../middlewares/auth.middleware";

const todoRoutes = Router();

todoRoutes.get("/", authMiddleware, getTodos);
todoRoutes.post("/", authMiddleware, createTodo);
todoRoutes.delete("/:id", authMiddleware, deleteTodo);
todoRoutes.put("/title/:todoId", authMiddleware, updateTodoData);
todoRoutes.put("/iscomplete/:id", authMiddleware, updateTodoStatus);

export default todoRoutes;
