import { Response } from "express";

interface responceParams {
  res: Response;
  statusCode?: number;
  data?: string | object | string[];
}

export default function ApiResponse({
  res,
  statusCode = 200,
  data = {},
}: responceParams): Response {
  return res.status(statusCode).send({
    success: true,
    data: data,
  });
}
