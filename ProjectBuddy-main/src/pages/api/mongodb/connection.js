import mongoose from "mongoose";

export default async function connect(req, res) {
  const CONNECTION_URL = process.env.NEXT_PUBLIC_MONGO_URI;

  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    if (res) {
      res.send("Connected");
    } else {
      console.error("Response object is undefined");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    if (res) {
      res.status(500).send("MongoDB connection error");
    } else {
      console.error("Response object is undefined");
    }
  }
}
