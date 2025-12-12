import z from "zod";

export const signupSchema = z
  .object({
    fullname: z.string().trim().min(3).max(40),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not matched",
    path: ["confirmPassword"],
  });
