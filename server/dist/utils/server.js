"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const note_1 = __importDefault(require("../routes/note"));
function createServer() {
    const app = (0, express_1.default)();
    app.use((0, body_parser_1.json)());
    app.use((0, body_parser_1.urlencoded)({ extended: true }));
    app.use((_req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    });
    app.use("/api/note", note_1.default);
    return app;
}
exports.default = createServer;
