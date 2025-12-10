import mongoose, { Schema, Document, model, Types } from "mongoose";

export interface TodoInterface extends Document {
  title: String;
  isComplete: Boolean;
  dueDate: Date;
  userId: Types.ObjectId;
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
    dueDate: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = model<TodoInterface>("Todo", todoSchema);
