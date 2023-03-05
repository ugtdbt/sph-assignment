import express from "express";
import { json, urlencoded } from "body-parser";
import noteRoutes from "../routes/note";

function createServer() {
  const app = express();

  app.use(json());

  app.use(urlencoded({ extended: true }));

  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });

  app.use("/api/note", noteRoutes);
  return app;
}

export default createServer;
