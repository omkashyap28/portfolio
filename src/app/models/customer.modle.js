import { Schema, model } from "mongoose";

const customerSchema = new Schema(
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
    contact: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export const Customer = model("Customer", customerSchema);
