import dbConnect from "../../../db/dbConnect";
import Entry from "../../../db/models/Entry";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  if (req.method === "GET") {
    try {
      const entry = await Entry.findById(id);
      res.status(200).json(entry);
    } catch (error) {
      res.status(404).json({ message: "not found", details: error.message });
    }
  } else if (req.method === "DELETE") {
    const result = await Entry.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "entry deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PUT") {
    const updatedEntry = await Entry.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (updatedEntry) {
      res.status(200).json({ message: "entry updated" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
