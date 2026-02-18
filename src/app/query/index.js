import mongoose from "mongoose";
import { dbConnect } from "../db/db";
import { Project } from "../models/projects.model";

dbConnect();

export const getProjects = () => {
  Project.getMany();
};
