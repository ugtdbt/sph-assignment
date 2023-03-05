"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./db/config"));
const server_1 = __importDefault(require("./utils/server"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, server_1.default)();
const port = Number(process.env.PORT) || 4700;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
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
