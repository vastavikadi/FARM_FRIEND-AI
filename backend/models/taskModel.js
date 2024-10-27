import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  time: Date,
  email: String,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;