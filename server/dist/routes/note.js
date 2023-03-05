"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_1 = require("../controller/note");
const router = (0, express_1.Router)();
router.post("/", note_1.createNote);
router.get("/", note_1.getAllNotes);
router.get("/:id", note_1.getNoteById);
router.put("/:id", note_1.updateNote);
router.delete("/:id", note_1.deleteNote);
exports.default = router;
