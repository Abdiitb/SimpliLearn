import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to DB !!!", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error connecting to DB !!!", error);
        process.exit(1);
    }
}

export default connectDB;