import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  user: { type: String },
  date: { type: String },
  mood: { type: String },
  good: { type: String },
  bad: { type: String },
  period: { type: Boolean },
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
