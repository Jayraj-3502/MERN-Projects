import zod, { object } from "zod";

export const loginSchema = object({
  email: zod.string().email("Invalid Emial"),
  password: zod.string().min(8),
});
