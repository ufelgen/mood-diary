import dbConnect from "../../../db/dbConnect";
import Profile from "../../../db/models/Profile";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });
  const email = session?.user.email;
  if (!email) {
    return res.status(401).json({ message: "not authorized. please log in." });
  }

  if (req.method === "GET") {
    const profiles = await Profile.find({ user: email });

    const allProfiles = profiles.map((profile) => {
      return {
        user: profile.user,
        id: profile._id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birthday: profile.birthday,
      };
    });

    res.status(200).json(allEntries);
  } else if (req.method === "POST") {
    const data = { ...req.body, user: email };

    try {
      const newProfile = await Profile.create(data);
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(400).json("Data could not be processed", { error });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
}
