import bcrypt from "bcrypt";

/**
 * Generates a secure hashed version of a plain text password.
 *
 * This function uses bcrypt to hash the password with a salt round of 10
 * for better security against brute-force and rainbow table attacks.
 *
 * @param password - The plain text password that needs to be hashed.
 *
 * @returns A Promise that resolves to the generated hashed password.
 *
 * @example
 * ```ts
 * const hashedPassword = await passwordHashing("myStrongPassword");
 * console.log(hashedPassword);
 * ```
 *
 * @throws Throws an error if hashing fails.
 */

async function passwordHashing(password: string): Promise<string> {
  const result: string = await bcrypt.hash(password, 10);
  return result;
}

export default passwordHashing;
