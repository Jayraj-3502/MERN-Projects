import { Request, Response } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { User } from "../models/user.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { Todo } from "../models/todo.model";

export async function sortByAddedAccending(req: CustomRequest, res: Response) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ createdAt: 1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByAddedDescending(req: CustomRequest, res: Response) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ createdAt: -1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedAccending(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ updatedAt: 1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedDescending(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ updatedAt: -1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateAccending(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ dueDate: 1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateDescending(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: "6936c6da57767666aae62569" });
    const todosData = await Todo.find({ userId: "6936c6da57767666aae62569" })
      .sort({ dueDate: -1 })
      .limit(10)
      .skip(10 * (+page - 1))
      .exec();

    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send data as response
    ApiResponse({
      res,
      statusCode: 200,
      data: { todosData, totalpages: Math.ceil(totalCount.length / 10) },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
