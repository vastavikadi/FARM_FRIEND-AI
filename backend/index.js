import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import { connectDB } from "./config/database.js";
import ratingRoutes from "./routes/rating.js";
import taskRoutes from "./routes/task.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/", contactRoutes);
app.use("/apl/ratings", ratingRoutes);
app.use("/tasks", taskRoutes);
app.use('/api', userRoutes); 

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});