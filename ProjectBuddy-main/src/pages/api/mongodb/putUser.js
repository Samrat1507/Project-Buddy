// userdetails.js
import connect from "./connection";
import User from "../../../../models/user";

export default async function handler(req, res) {
  await connect();

  const { username, description, location, githubId, linkedinId } = req.body;

  try {
    const newUser = new User({ username, description, location, githubId, linkedinId });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error saving user:", error.message);
    res.status(500).send("Internal server error");
  }
}
