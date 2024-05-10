import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import cors from "cors";
import userRouter from "./routes/userRoute.js"
import authRouter from "./routes/authRoute.js"

const app = express();

app.use(express.json());

// app.use(cors());

app.use('/api', userRouter);
app.use('/api/auth', authRouter);

app.use((err, request, response, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("connection successful");
        app.listen(PORT, () =>{
            console.log(`App is listening to ${PORT}`);
        });
        
    })
    .catch((error) => {
        console.log(error);
    });