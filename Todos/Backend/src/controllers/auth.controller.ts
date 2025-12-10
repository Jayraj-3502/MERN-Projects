import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";
import { User } from "../models/user.model";
import { createUser } from "./user.controller";
import bcrypt from "bcrypt";
import passwordCompare from "../utils/passwordCompare";
import tokenGenerator from "../utils/tokenGenerator";

// Register User with the basic details
export async function register(req: Request, res: Response) {
  try {
    // getting all the required details from the body
    const { email } = req.body;

    // checking that the user with the specified email exist or not?
    const userExist = await User.findOne({ email });

    // if exist then throw error
    if (userExist)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "User already exist!",
      });

    // if not exist then send Otp for the verification
    ApiResponse({
      res,
      statusCode: 200,
      data: "OTP sended on provided email!",
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Verify Register User
export async function verifyRegister(req: Request, res: Response) {
  try {
    // getting all the required details from the body
    const { email } = req.body;

    // checking that the user with the specified email exist or not?
    const userExist = await User.findOne({ email });

    // if exist then throw error
    if (userExist)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "User already exist!",
      });

    // getting all the details which is required from the body
    const { otp } = req.body;

    // check that the provided OTP is same or not?
    // if OTP not matched then throw error
    if (otp !== "789456")
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "OTP is not matching!",
      });

    // if OTP matched then call create user function
    await createUser(req, res);
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// login User with email and password
export async function login(req: Request, res: Response) {
  try {
    // getting all the required details from the body
    const { email, password } = req.body;

    // check that the user with the specified emai exist or not?
    const userExist = await User.findOne({ email });

    // if not exist then throw error
    if (!userExist)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Email not exist!",
      });

    // if exist then match password
    const passwordMatched = await passwordCompare(password, userExist.password);

    // if password not matched then throw error
    if (!passwordMatched)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Password not matched!",
      });

    const token = await tokenGenerator({
      id: userExist?._id,
      email: userExist?.email,
    });

    if (!token)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Something went wrong please try again",
      });

    ApiResponse({ res, statusCode: 200, data: token });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Verify Forgot Password With Email
export async function verifyForgotPasswordEmail(req: Request, res: Response) {
  try {
    // getting email from the body
    const { email } = req.body;
    // check that user with the specified email exist or not?
    const userExist = await User.findOne({ email });

    // if not then throw error
    if (!userExist)
      return ApiError({ res, statusCode: 400, errorMessage: "User not exist" });
    // if yes then send response for next step OTP verification
    ApiResponse({
      res,
      statusCode: 200,
      data: "Email verification complete! OTP sended to your email",
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Verify Forgot Password with Otp
export async function verifyForgotPasswordOtp(req: Request, res: Response) {
  try {
    // getting email from the body
    const { email, otp } = req.body;

    // check that user with the specified email exist or not?
    const userExist = await User.findOne({ email });

    // if not then throw error
    if (!userExist)
      return ApiError({ res, statusCode: 400, errorMessage: "User not exist" });

    // check that OTP is matching or not?
    // if not then throw error
    if (otp !== "789456")
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "OTP is not matching!",
      });

    // if yes then send response for next step Password Reset
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
