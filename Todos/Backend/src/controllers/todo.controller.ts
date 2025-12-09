import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";
import { CustomRequest } from "../types/CustomRequest";
import todoSchemaValidation from "../validators/todo.validator";
import { Todo, TodoInterface } from "../models/todo.model";
import { User } from "../models/user.model";
import { Types } from "mongoose";

interface todoInterface {
  _id: string;
  title: string;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create Todo
export async function createTodo(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body

    // run ZOD validation on the value's taken from the body
    const validationResult = await todoSchemaValidation.parse(req.body);

    // if validation false then throw error
    if (!validationResult)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Validation failure. please recheck the fields data.",
      });

    // create todo with the provided details
    const todoCreated = await Todo.create({ ...req.body });

    console.log(todoCreated);
    // if todo not created then throw error
    if (!todoCreated)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Issue in adding todo please try again",
      });

    // add todo id in logged in user todos array
    const todoAdded = await User.findByIdAndUpdate(
      "6936c6da57767666aae62569",
      {
        $push: { todos: todoCreated?._id },
      },
      { new: true }
    );
    console.log(todoAdded);

    // if not added then throw error
    if (!todoAdded)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Issue in adding todo please try again",
      });

    // send "Todo Added" as a success response
    ApiResponse({ res, statusCode: 200, data: "Todo added" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Update Todo
export async function updateTodoTitle(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body
    const { title } = req.body;
    const { id } = req.params;

    // if title exist or not
    if (!title)
      return ApiError({
        res,
        statusCode: 404,
        errorMessage: "Title is not provided",
      });

    // update todo with the provided details
    const updateTodo = await Todo.findByIdAndUpdate(id, {
      $set: { title },
    });

    // if todo not updated then throw error
    if (!updateTodo)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error during update.",
      });

    // send "Todo updated" as a success response
    ApiResponse({ res, statusCode: 200, data: "Updated Successfully" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Update Todo
export async function updateTodoStatus(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body
    // run ZOD validation on the value's taken from the body
    // if validation false then throw error
    // update todo with the provided details
    // if todo not updated then throw error
    // send "Todo updated" as a success response
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Delete Todo
export async function deleteTodo(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body
    // run ZOD validation on the value's taken from the body
    // if validation false then throw error
    // delete todo with the provided details
    // if todo not deleted then throw error
    // remove todo id from logged in user's todos array
    // if not removed then throw error
    // send "Todo removed" as a success response
    ApiResponse({ res, statusCode: 200, data: "complete" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
