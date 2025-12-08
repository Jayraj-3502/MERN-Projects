import { Response } from "express";

interface errorParams {
  res: Response;
  statusCode?: number;
  errorMessage?: string | object | string[];
}

export default function ApiError({
  res,
  statusCode = 500,
  errorMessage = "Something went wrong",
}: errorParams): Response {
  return res.status(statusCode).send({
    success: false,
    error: errorMessage,
  });
}
