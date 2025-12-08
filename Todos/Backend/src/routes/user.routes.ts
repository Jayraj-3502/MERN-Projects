import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateAvatar,
  updateUser,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", getUser);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.put("/:id", updateAvatar);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
