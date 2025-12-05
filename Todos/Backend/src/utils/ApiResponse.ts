import { Response } from "express";

export default function ApiResponse(
  res: Response,
  statusCode: number = 200,
  data: any = {}
) {
  return res.status(statusCode).send({
    success: false,
    data: data,
  });
}
