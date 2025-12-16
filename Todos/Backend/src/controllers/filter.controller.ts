import { Request, Response } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { User } from "../models/user.model";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { Todo } from "../models/todo.model";

export async function sortByAddedAccendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByAddedAccendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByAddedDescendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByAddedDescendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedAccendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedAccendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedDescendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByLatestModifiedDescendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateAccendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateAccendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateDescendingIncomplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: false });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: false })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}

export async function sortByDueDateDescendingComplete(
  req: CustomRequest,
  res: Response
) {
  try {
    // verify that user is legal or not
    const { id } = req.user as { id: string };

    // take page number from params
    const { page } = req.params;
    // if not lega then throw error
    // access user data and short it and selet requred info only pagination also
    const totalCount = await Todo.find({ userId: id, isComplete: true });

    const pageCount = Math.ceil(totalCount.length / 10);

    if (pageCount < +page)
      return ApiError({ res, statusCode: 404, errorMessage: "Page not found" });

    const todosData = await Todo.find({ userId: id, isComplete: true })
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
      data: { todosData, totalpages: pageCount },
    });
  } catch (error: any) {
    ApiError({ res, statusCode: 500, errorMessage: error });
  }
}
