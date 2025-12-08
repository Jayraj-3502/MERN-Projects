import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";

// Create Todo
export async function createTodo(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Update Todo
export async function updateTodo(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Delete Todo
export async function deleteTodo(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
