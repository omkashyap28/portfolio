import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      lowercase: true,
      index: true,
      unique: true,
      required: [true, "Email is required"],
    },
    contact: {
      type: Number,
      unique: true,
      required: false,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    verified: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = model("User", userSchema);
