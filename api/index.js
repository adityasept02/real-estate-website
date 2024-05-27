import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MON)
        console.log('Database connected')
    } catch (err) {
        console.log(err)
    }
}

connectDb();

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
    console.log('working')
})
