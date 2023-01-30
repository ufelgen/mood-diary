import dbConnect from "../../../db/dbConnect";
import Entry from "../../../db/models/Entry";
//import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  //const session = await getSession({ req });
  //const email = session?.user.email;
  // if (!email) {
  //  return res.status(401).json({ message: "not authorized. please log in." });
  // }

  if (req.method === "GET") {
    const entries = await Entry.find();

    const allEntries = entries.map((entry) => {
      return {
        id: entry._id,
        date: entry.date,
        mood: entry.mood,
        good: entry.good,
        bad: entry.bad,
      };
    });

    res.status(200).json(allEntries);
  } else if (req.method === "POST") {
    const data = req.body;

    try {
      const newEntry = await Entry.create(data);
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(400).json("Data could not be processed", { error });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
