import mongoose, { Schema, Document } from "mongoose";

export interface TodoInterface extends Document {
  title: String;
  isComplete: Boolean;
}

const todoSchema = new Schema(
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

export const Todo = mongoose.model("Todo", todoSchema);
