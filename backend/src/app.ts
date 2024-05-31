import express from "express";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./database/data-source";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "hello world",
  });
});

//db connection
AppDataSource.initialize()
  .then(() => {
    console.log("database is connected successfully");
    app.listen(process.env.APP_PORT || 3000, () => {
      console.log(
        `server is running on http://localhost:${process.env.APP_PORT || 3000}`
      );
    });
  })
  .catch((error) => {
    console.log("error min db connection", error);
  });
