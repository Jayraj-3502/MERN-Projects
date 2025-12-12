import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid Emial"),
  password: z.string().min(8),
});

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

export const emailSchema = z.object({
  email: z.string().email(),
});

export const otpSchema = z.object({
  otp: z.string().min(6, "OTP must have 6 Digits"),
});

export const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must have 8 digits"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not matched",
    path: ["confirmPassword"],
  });
