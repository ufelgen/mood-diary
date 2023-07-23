import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema({
  user: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  birthday: { type: String },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
