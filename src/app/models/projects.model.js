const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
    status: {
      type: Boolean,
      required: true,
    },
    liveUrl: {
      type: String,
      required: false,
      unique: true,
    },
    team: {
      type: String,
      enum: ["Solo", "Team"],
      default: "Solo",
      required: true,
    },
    purpose: {
      type: String,
      required: [true, "Project purpose is required"],
    },
    futureScope: {
      type: String,
      required: false,
    },
    upComingFeatures: {
      type: String,
      required: false,
    },
    tools: {
      type: [String],
      required: [true, "At least one tool is required"],
    },
    languages: {
      type: [String],
      required: [true, "At least one programming language is required"],
    },
  },
  { timestamps: true },
);

export const Project = model("Project", projectSchema);
