import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CustomRequest } from "../types/CustomRequest";

async function authMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
      return ApiError({
        res,
        statusCode: 401,
        errorMessage: "Access Denied. Token not provided",
      });

    const decoded = jwt.verify(
      token,
      process.env.JWT_PRIVATE_KEY!
    ) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export default authMiddleware;
