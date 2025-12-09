import { Request, Response } from "express";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import userSchemaValidation from "../validators/user.validator";
import { User } from "../models/user.model";
import passwordHashing from "../utils/passwordHashing";
import { CustomRequest } from "../types/CustomRequest";
import cloudinaryUpload from "../utils/cloudinaryUpload";

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
    req.body.password = await passwordHashing(req.body.password);

    if (!req.body.password)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Something went wrong please try again",
      });

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
    ApiResponse({ res, statusCode: 200, data: "Account created. Login now." });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// update user
export async function updateUser(req: CustomRequest, res: Response) {
  try {
    // check that user is logged in or not
    // if not then throw error
    // run validation on provided data
    // if validation fails then throw error
    // update the user data
    // if update fails then throw error
    // return "User updated" as response
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// profile avatar update
export async function updateAvatar(req: CustomRequest, res: Response) {
  try {
    // check that user is logged in or not
    // if not the throw error

    // destructured required details from cloudinaryUpload details
    const { secure_url, public_id } = await cloudinaryUpload(req.file);

    // checking that the required details exist or not?
    if (!secure_url || !public_id)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in uploading image please try again",
      });

    // update the logged in user avatar
    const updateUserAvatar = await User.findByIdAndUpdate(
      // user if taking form the token provided by the loggin user
      "6937d1102525f1f0fa608f0c",
      {
        // setting the updated fields only and other remain as it is.
        $set: {
          avatarUrl: secure_url,
          avatarPublicUrl: public_id,
        },
      }
    );

    // if avatar not updated then throw error
    if (!updateUserAvatar)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Problem in updating avatar!",
      });

    // sending result as a success
    ApiResponse({ res, statusCode: 200, data: "Avatar updated" });
  } catch (error: any | object) {
    ApiError({ res, statusCode: error.http_code || 500, errorMessage: error });
  }
}

// delete user
export async function deleteUser(req: CustomRequest, res: Response) {
  try {
    // getting all the details from the auth middleware
    // check that the loggin user email exist or not
    const userExist = await User.findById("id");

    // if not then throw error
    if (!userExist || !userExist.isActive)
      return ApiError({
        res,
        statusCode: 404,
        errorMessage: "User not found!",
      });

    // if yes then remove all the user details and set isActive to false
    const deletedUser = await User.findByIdAndUpdate(
      "id",
      {
        $set: {
          isActive: false,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!deletedUser)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "User not deleted try again!",
      });

    // send response
    ApiResponse({ res, statusCode: 200, data: "Deleted" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
