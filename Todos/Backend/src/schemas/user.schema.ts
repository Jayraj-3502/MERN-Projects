import zod, { object } from "zod";

const userSchemaValidation = object({
  fullname: zod.string().min(3).max(40).trim(),
  email: zod.string().trim(),
  password: zod.string().min(6).max(20),
  avatarUrl: zod.string(),
  avatarPublicUrl: zod.string(),
});

export default userSchemaValidation;
