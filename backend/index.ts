import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect";
import { PostsRouter, DallERouter } from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", DallERouter);
app.use("/api/v1/posts", PostsRouter);

app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("server started on port 8080");
    });
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};

startServer();
