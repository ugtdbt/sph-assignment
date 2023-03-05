import { Sequelize } from "sequelize-typescript";
import { Note } from "../models/note";
import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.TEST_DB_HOST || "127.0.0.1",
  username: process.env.TEST_DB_USER || "sphuser",
  password: process.env.TEST_DB_PASS || "123456Aa@",
  database: process.env.TEST_DB_NAME || "sphdb",
  port: Number(process.env.TEST_DB_PORT) || 3308,
  logging: false,
  models: [Note],
});

export default connection;
