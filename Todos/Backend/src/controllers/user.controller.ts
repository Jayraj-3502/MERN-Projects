import { Request, Response } from "express";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import zod from "zod";
import userSchemaValidation from "../validators/user.validator";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";

// get user details
export async function getUser(req: Request, res: Response) {
  try {
    // getting all the required details from the body
    //
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// create user
export async function createUser(req: Request, res: Response) {
  try {
    // verify the data by using ZOD methods
    const userValidation = userSchemaValidation.parse(req.body);

    // if validation failed then throw error
    if (!userValidation)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Data entered in wrong formate!",
      });

    // if validation succeed then do password hashing
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // now create user
    const userCreated = await User.create(req.body);

    // if user not created then throw error
    if (!userCreated)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "User not created please retry!",
      });

    // if user created then send response
    ApiResponse({ res, statusCode: 200, data: userCreated });
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
    // getting all the details from the auth middleware
    // check that the loggin user email exist or not
    // if not then throw error
    // if yes then remove all the user details and set isActive to false
    // send response
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
