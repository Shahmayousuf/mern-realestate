import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern-estate");
    console.log("mongodb connectd");
  } catch (error) {
    console.log("mongodb not connectd");
    throw error;
  }
};
connectdb();

const app = express();
// CORS Configuration
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing",listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message =err.message || 'internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

});
 