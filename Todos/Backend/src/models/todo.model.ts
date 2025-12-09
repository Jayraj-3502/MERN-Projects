import { Schema, Document, model } from "mongoose";

export interface TodoInterface extends Document {
  title: String;
  isComplete: Boolean;
}

const todoSchema = new Schema<TodoInterface>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = model<TodoInterface>("Todo", todoSchema);
