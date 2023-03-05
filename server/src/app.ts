import express from "express";
import connection from "./db/config";
import createServer from "./utils/server";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app = createServer();

const port = Number(process.env.PORT) || 4700;


app.use(cors({
    origin: "http://localhost:3000/",
    methods:["GET", "POST", "PUT", "DELETE"]
}));

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);


connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
