import dbConnect from "../../../db/dbConnect";
import Task from "../../../db/models/Task";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  if (req.method === "GET") {
    try {
      const task = await Task.findById(id);
      res.status(200).json(task);
    } catch (error) {
      res.status(404).json({ message: "not found", details: error.message });
    }
  } else if (req.method === "DELETE") {
    const result = await Task.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ message: "entry deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else if (req.method === "PUT") {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (updatedTask) {
      res.status(200).json({ message: "entry updated" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
