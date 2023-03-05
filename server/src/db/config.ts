import { Sequelize } from "sequelize-typescript";
import { Note } from "../models/note";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  username: process.env.DB_USER || "sphuser",
  password: process.env.DB_PASS || "123456Aa@",
  database: process.env.DB_NAME || "sphdb",
  port: Number(process.env.DB_PORT) || 3307,
  logging: false,
  models: [Note],
});

export default connection;
