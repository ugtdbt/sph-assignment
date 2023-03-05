"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const note_1 = require("../models/note");
const connection = new sequelize_typescript_1.Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "sphuser",
  password: "123456Aa@",
  database: "sphdb",
  port: 3307,
  logging: false,
  models: [note_1.Note],
});
exports.default = connection;
