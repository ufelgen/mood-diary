import dbConnect from "../../../db/dbConnect";
import Task from "../../../db/models/Task";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });
  const email = session?.user.email;
  if (!email) {
    return res.status(401).json({ message: "not authorized. please log in." });
  }

  if (req.method === "GET") {
    const tasks = await Task.find({ user: email });

    const allTasks = tasks.map((task) => {
      return {
        user: task.user,
        id: task._id,
        headline: task.headline,
        body: task.body,
        backgroundColour: task.backgroundColour,
        textColour: task.textColour,
        status: task.status,
      };
    });

    res.status(200).json(allTasks);
  } else if (req.method === "POST") {
    const data = { ...req.body, user: email };

    try {
      const newTask = await Task.create(data);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json("Data could not be processed", { error });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
