import multer, { memoryStorage } from "multer";

const storage = memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1,
  },
});

export default upload;
