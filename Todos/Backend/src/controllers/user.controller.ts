import { Request, Response } from "express";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import userSchemaValidation from "../validators/user.validator";
import { User } from "../models/user.model";
import passwordHashing from "../utils/passwordHashing";
import { CustomRequest } from "../types/CustomRequest";
import cloudinaryUpload from "../utils/cloudinaryUpload";
import passwordCompare from "../utils/passwordCompare";

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
    const { id, email } = req.user as { id: string; email: string };

    // // run validation on provided data
    // const dataValidated = userSchemaValidation.parse({ ...req.body, email });

    // // if validation fails then throw error
    // if (!dataValidated)
    //   return ApiError({
    //     res,
    //     statusCode: 400,
    //     errorMessage: "Validation failure. please recheck the fields data.",
    //   });

    // update the user data
    const userUpdateDetails = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      {
        runValidators: true,
        new: true,
      }
    );

    // if update fails then throw error
    if (!userUpdateDetails)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Data not updates please try again",
      });

    // return "User updated" as response
    ApiResponse({ res, statusCode: 200, data: userUpdateDetails });
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

// password update with old one
export async function updatePassword(req: CustomRequest, res: Response) {
  try {
    // check that user is logged in or not
    const { id } = req.user as { id: string };
    // if not then throw error
    const userExist = await User.findById(id);

    if (!userExist)
      return ApiError({
        res,
        statusCode: 404,
        errorMessage: "User not found!",
      });

    // getting all the required details from the body
    const { oldPassword, newPassword } = req.body;

    const passwordMatching = await passwordCompare(
      oldPassword,
      userExist.password
    );

    if (!passwordMatching)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Old Password is incorrect!",
      });

    // hash the new password
    const hashedNewPassword = await passwordHashing(newPassword);

    if (!hashedNewPassword)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Something went wrong please try again",
      });

    // update the password
    const updatedPassword = await User.findByIdAndUpdate(
      // user id taking form the token provided by the loggin user
      id,
      {
        // setting the updated fields only and other remain as it is.
        $set: {
          password: hashedNewPassword,
        },
      }
    );

    // if password not updated then throw error
    if (!updatedPassword)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Problem in updating password!",
      });

    // sending result as a success
    ApiResponse({ res, statusCode: 200, data: "Password updated" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// password update with forgot
export async function updatePasswordForgot(req: Request, res: Response) {
  try {
    // taking password from the body
    const { password, email } = req.body;
    // check if password exist or not
    if (!password || !email)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Some details are missing!",
      });
    // hashing the password
    const hashedPassword = await passwordHashing(password);
    // check that password hashed or not
    if (!hashedPassword)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Somehing went wrong please try again",
      });
    // update the password
    const userPasswordUpdate = await User.findOneAndUpdate(
      { email },
      { $set: { password: hashedPassword } },
      { new: true, runValidators: true }
    );
    // check that password updated or not
    if (!userPasswordUpdate)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Password not updated please try again",
      });
    // send response as result
    ApiResponse({ res, statusCode: 200, data: "Password Updated" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
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
      { $set: { isActive: false, todos: [] } },
      { new: true, runValidators: true }
    );

    if (!deletedUser)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "User not deleted try again!",
      });

    // send response
    ApiResponse({ res, statusCode: 200, data: "User Deleted" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
