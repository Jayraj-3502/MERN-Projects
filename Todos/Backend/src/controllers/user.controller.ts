import { Request, Response } from "express";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";

// get user details
export async function getUser(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// create user
export async function createUser(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// update user
export async function updateUser(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// profile avatar update
export async function updateAvatar(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// delete user
export async function deleteUser(req: Request, res: Response) {
  try {
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
