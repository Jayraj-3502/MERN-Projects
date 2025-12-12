import mongoose, { model, Schema, Types } from "mongoose";

export interface UserInterface extends Document {
  fullname: string;
  email: string;
  password: string;
  avatarUrl: string;
  avatarPublicUrl: string;
  isActive: boolean;
}

const userSchema = new Schema<UserInterface>(
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
      default: "",
    },
    avatarPublicUrl: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserInterface>("User", userSchema);
