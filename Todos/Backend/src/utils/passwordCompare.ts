import bcrypt from "bcrypt";

/**
 * Compares a plain text password with a hashed password.
 *
 * @param enteredPassword - The user entered plain text password.
 * @param userDbPassword - The hashed password stored in the database.
 *
 * @returns A Promise that resolves to `true` if the passwords match.
 *
 * @example
 * ```ts
 * const isMatch = await passwordCompare("mypassword", hash);
 * ```
 */

async function passwordCompare(
  enteredPassword: string,
  userDbPassword: string
): Promise<boolean> {
  const result: boolean = await bcrypt.compare(enteredPassword, userDbPassword);
  return result;
}

export default passwordCompare;
