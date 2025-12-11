import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";
import { CustomRequest } from "../types/CustomRequest";
import todoSchemaValidation from "../validators/todo.validator";
import { Todo, TodoInterface } from "../models/todo.model";
import { User } from "../models/user.model";
import { Types } from "mongoose";

export async function getTodos(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    const { id, email } = req.user as { id: string; email: string };
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body

    // get todos of logged in user
    const todosData = await User.findById(id)
      .select("todos")
      .populate("todos")
      .exec();

    // if todos not found then throw error
    if (!todosData)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Error in fetching data",
      });

    // send todos data as a success response
    ApiResponse({ res, statusCode: 200, data: todosData });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Create Todo
export async function createTodo(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    const { id, email } = req.user as { id: string; email: string };

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
    const todo = await Todo.create({
      ...req.body,
      userId: id,
    });

    // if todo not created then throw error
    if (!todo)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Issue in adding todo please try again",
      });

    // send "Todo Added" as a success response
    ApiResponse({ res, statusCode: 200, data: "Todo Added" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

// Update Todo Title
export async function updateTodoData(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body
    const { todoId } = req.params;

    // run validaiton
    const todoValidaiton = await todoSchemaValidation.parse(req.body);

    // if validation fails then throw error
    if (!todoValidaiton)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Validation failure! Please check input data.",
      });

    // update todo with the provided details
    const updateTodo = await Todo.findByIdAndUpdate(todoId, {
      $set: { ...req.body },
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

// Update Todo Status
export async function updateTodoStatus(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    // if yes then take all the necessary details from the body
    const { isComplete } = req.body;
    const { id } = req.params;

    // if title exist or not
    if (isComplete === undefined || isComplete === "")
      return ApiError({
        res,
        statusCode: 404,
        errorMessage: "Status is not provided",
      });

    // update todo with the provided details
    const updateTodo = await Todo.findByIdAndUpdate(id, {
      $set: { isComplete },
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

// Delete Todo
export async function deleteTodo(req: CustomRequest, res: Response) {
  try {
    // checking that user is logged in or not
    // if user not logged in then throw error
    const { id, email } = req.user as { id: string; email: string };

    // if yes then take all the necessary details from the body

    // run ZOD validation on the value's taken from the body
    // if validation false then throw error
    if (!id)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Todo id not provided",
      });

    // delete todo with the provided details
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    // if todo not deleted then throw error
    if (!deletedTodo)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Todo not deleted! Try again.",
      });

    // remove todo id from logged in user's todos array
    const removedTodo = await User.findByIdAndUpdate(
      id,
      { $pull: { todos: deletedTodo?._id } },
      { new: true, runValidators: true }
    );

    console.log(removedTodo);

    // if not removed then throw error
    if (!removedTodo)
      return ApiError({
        res,
        statusCode: 400,
        errorMessage: "Item not removed! Try again.",
      });

    // send "Todo removed" as a success response
    ApiResponse({ res, statusCode: 200, data: "Todo Deleted" });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
