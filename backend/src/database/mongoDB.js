import mongoose from "mongoose"
import { DB_URI } from "../config/env.js"

if(!DB_URI) throw new Error('Check the Database connection')

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("Connected To Database");
    } catch (error) {
        console.log("something went wrong")
        process.exit(1)
    }
} 

export default connectDB