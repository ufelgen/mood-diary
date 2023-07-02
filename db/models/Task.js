import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  user: { type: String },
  headline: { type: String },
  body: { type: String },
  backgroundColour: { type: String },
  textColour: { type: String },
  status: { type: String },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
