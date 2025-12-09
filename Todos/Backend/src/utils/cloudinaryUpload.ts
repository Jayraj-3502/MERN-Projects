import multer from "multer";
import cloudinary from "../config/cloudinary";

async function cloudinaryUpload(file: any | null) {
  return await new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      })
      .end(file?.buffer);
  });
}

export default cloudinaryUpload;
