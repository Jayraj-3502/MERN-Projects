import { Response } from "express";
import cloudinary from "../config/cloudinary";

async function cloudinaryDelete(avatar_public_url: string) {
  try {
    const deleteResult = await cloudinary.uploader.destroy(avatar_public_url);
    if (!deleteResult) return null;

    return deleteResult;
  } catch (error: any) {
    return null;
  }
}

export default cloudinaryDelete;
