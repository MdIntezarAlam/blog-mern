import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connection is successful",)
    } catch (error) {
        console.log("connection is error", error)
    }
}

export default Connection;