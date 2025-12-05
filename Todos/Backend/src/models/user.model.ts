import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
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
  },
  avatarUrl: {
    type: String,
  },
  avatarPublicUrl: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
