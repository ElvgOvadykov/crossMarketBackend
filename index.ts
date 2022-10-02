import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server edit");
    });

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

    if (!process.env.DB_URL) {
      throw Error("db url not found");
    }

    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
  }
};

start();
