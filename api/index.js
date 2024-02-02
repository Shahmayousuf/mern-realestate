import express from "express";
import mongoose from 'mongoose'


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

app.listen(3000, () => {
  console.log("server is running on port 3000");
}
);
