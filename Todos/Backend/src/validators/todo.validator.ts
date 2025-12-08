import zod, { object } from "zod";

const todoSchemaValidation = object({
  title: zod.string().trim(),
  isComplete: zod.boolean().default(false),
});

export default todoSchemaValidation;
