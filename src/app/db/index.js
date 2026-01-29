import { connect } from "mongoose";

export default async function connectDB() {
  console.log("dsfc");
  try {
    const response = await connect(process.env.MONGODB_URI);
  } catch (error) {
    consoSle.error("Database connection failed!!", error);
    throw new Error(error);
  }
}
