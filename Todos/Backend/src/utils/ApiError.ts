import { Response } from "express";

export default function ApiError(
  res: Response,
  statusCode: number = 400,
  errorMessage: any = ""
) {
  return res.status(statusCode).send({
    success: false,
    error: errorMessage,
  });
}
