"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.getNoteById = exports.getAllNotes = exports.deleteNote = exports.createNote = void 0;
const note_1 = require("../models/note");
const createNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield note_1.Note.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ message: "Todo created successfully", data: note });
    }
    catch (error) {
        return res.status(403).json({ message: "Error", data: error.message });
    }
});
exports.createNote = createNote;
const deleteNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedNote = yield note_1.Note.findByPk(id);
        if (deletedNote) {
            yield note_1.Note.destroy({ where: { id } });
            return res
                .status(200)
                .json({ message: "Todo deleted successfully", data: deletedNote });
        }
        else {
            return res
                .status(403)
                .json({ message: "Error", data: "Given id not available" });
        }
    }
    catch (error) {
        return res.status(403).json({ message: "Error", data: error.message });
    }
});
exports.deleteNote = deleteNote;
const getAllNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allNotes = yield note_1.Note.findAll();
        return res
            .status(200)
            .json({ message: "Todo fetched successfully", data: allNotes });
    }
    catch (error) {
        return res.status(403).json({ message: "Error", data: error.message });
    }
});
exports.getAllNotes = getAllNotes;
const getNoteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const note = yield note_1.Note.findByPk(id);
        if (note) {
            return res
                .status(200)
                .json({ message: "Note fetched successfully", data: note });
        }
        else {
            return res
                .status(403)
                .json({ message: "Error", data: "Given id not available" });
        }
    }
    catch (error) {
        return res.status(403).json({ message: "Error", data: error.message });
    }
});
exports.getNoteById = getNoteById;
const updateNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield note_1.Note.update(Object.assign({}, req.body), { where: { id } });
        const updatedNote = yield note_1.Note.findByPk(id);
        return res
            .status(200)
            .json({ message: "Note updated successfully", data: updatedNote });
    }
    catch (error) {
        return res.status(403).json({ message: "Error", data: error.message });
    }
});
exports.updateNote = updateNote;
