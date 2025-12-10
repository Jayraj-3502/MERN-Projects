import { Router } from "express";
import multer from "multer";
import {
  createUser,
  deleteUser,
  getUser,
  updateAvatar,
  updateUser,
} from "../controllers/user.controller";
import upload from "../config/multer";
import authMiddleware from "../middlewares/auth.middleware";

const userRoutes = Router();

userRoutes.get("/", getUser);
userRoutes.post("/", createUser);
userRoutes.put("/", authMiddleware, updateUser);
userRoutes.put("/upload/avatar", upload.single("image"), updateAvatar);
userRoutes.delete("/", deleteUser);

export default userRoutes;
