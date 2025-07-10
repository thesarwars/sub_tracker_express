import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI env variable inside .env.<development/>production>.local."
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`database is connected with ${NODE_ENV}`);
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
