import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  updateTodoTitle,
} from "../controllers/todo.controller";

const todoRoutes = Router();

todoRoutes.post("/", createTodo);
todoRoutes.delete("/:id", deleteTodo);
todoRoutes.put("/title/:id", updateTodoTitle);

export default todoRoutes;
