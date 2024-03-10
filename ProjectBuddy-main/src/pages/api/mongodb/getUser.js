// dashboard.js
import connect from "./connection";
import User from "../../../../models/user";

export default async function handler(req, res) {
  await connect();

  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).send("Internal server error");
  }
}
