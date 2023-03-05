"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const note_1 = require("../models/note");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST || "127.0.0.1",
    username: process.env.DB_USER || "sphuser",
    password: process.env.DB_PASS || "123456Aa@",
    database: process.env.DB_NAME || "sphdb",
    port: Number(process.env.DB_PORT) || 3307,
    logging: false,
    models: [note_1.Note],
});
exports.default = connection;
