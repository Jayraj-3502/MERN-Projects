import mongoose, { Schema } from "mongoose";
import { ref } from "process";
import { required } from "zod/v4/core/util.cjs";

export interface UserInterface extends Document {
  fullname: String;
  email: String;
  password: String;
  avatarUrl: String;
  avatarPublicUrl: String;
}

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "This is required"],
      trim: true,
      min: [3, "Minimum 3 characters required"],
      max: [40, "Max 40 character limit"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: [6, "Minimum 6 characters required"],
      max: [20, "Maximum 20 character accepts"],
    },
    avatarUrl: {
      type: String,
    },
    avatarPublicUrl: {
      type: String,
    },
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
