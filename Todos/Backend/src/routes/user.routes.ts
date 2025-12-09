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

const userRoutes = Router();

userRoutes.get("/", getUser);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.put("/upload/avatar", upload.single("image"), updateAvatar);
userRoutes.delete("/", deleteUser);

export default userRoutes;
