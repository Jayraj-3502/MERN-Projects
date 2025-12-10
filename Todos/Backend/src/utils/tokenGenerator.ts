import jwt from "jsonwebtoken";

async function tokenGenerator(details: object): Promise<string> {
  const token = jwt.sign(details, process.env.JWT_PRIVATE_KEY as string, {
    expiresIn: "1d",
  });

  return token;
}

export default tokenGenerator;
