import express from "express";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./database/data-source";
import { User } from "./entities/User";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  let userRepo = AppDataSource.getRepository(User);
  res.json(await userRepo.update(17, {
    firstName:"sandip chaudahry"
  }));
  // const user1 = new User();
  // (user1.firstName = "rupesh"),
  //   (user1.lastName = "chy"),
  //   (user1.isActive = true);

  // const user2 = new User();
  // (user2.firstName = "samir"),
  //   (user2.lastName = "chy"),
  //   (user2.isActive = true);

  // const user3 = new User();
  // (user3.firstName = "abishek"),
  //   (user3.lastName = "chy"),
  //   (user3.isActive = true);
  //  return  res.json(await userRepo.save([user1, user2, user3]));


// how we can delete the table data ?
// with the help of turncate table "user" || delete from "user"
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
