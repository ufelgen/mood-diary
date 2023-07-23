import dbConnect from "../../../db/dbConnect";
import Profile from "../../../db/models/Profile";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  if (req.method === "GET") {
    try {
      const profile = await Profile.findById(id);
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ message: "not found", details: error.message });
    }
  } else if (req.method === "DELETE") {
    const result = await Profile.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "profile deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PUT") {
    const updatedProfile = await Profile.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (updatedProfile) {
      res.status(200).json({ message: "profile updated" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
