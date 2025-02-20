import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(import.meta.dirname, "../.env")});

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
