import zod, { object } from "zod";

const userSchemaValidation = object({
  fullname: zod.string().min(3).max(40).trim(),
  email: zod.string().trim().email("Invalid Email Formate"),
  password: zod.string().min(6).max(20),
  avatarUrl: zod.string().default(""),
  avatarPublicUrl: zod.string().default(""),
  isActive: zod.boolean().default(false),
});

export default userSchemaValidation;
