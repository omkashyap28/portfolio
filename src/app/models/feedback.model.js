import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    ratings: {
      type: Number,
      required: [true, "Ratings are required"],
      enum: [1, 2, 3, 4, 5],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    profile: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export const Feedback = model("Feedback", feedbackSchema);
