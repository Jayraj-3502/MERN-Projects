import express, { Router } from "express";
import {
  register,
  verifyRegister,
  login,
  verifyForgotPasswordEmail,
  verifyForgotPasswordOtp,
} from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/register/verify", verifyRegister);
authRoutes.post("/login", login);
authRoutes.post("/forgot-password/verify/email", verifyForgotPasswordEmail);
authRoutes.post("/forgot-password/verify/otp", verifyForgotPasswordOtp);

export default authRoutes;
