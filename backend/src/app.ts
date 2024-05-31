import express from "express";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "hello world",
  });
});

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(
    `server is running on http://localhost:${process.env.APP_PORT || 3000}`
  );
});
