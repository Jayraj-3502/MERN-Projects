import { Router } from "express";
import {
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller";

const todoRoutes = Router();

todoRoutes.post("/", createTodo);
todoRoutes.delete("/:id", deleteTodo);
todoRoutes.put("/:id", updateTodo);

export default todoRoutes;
