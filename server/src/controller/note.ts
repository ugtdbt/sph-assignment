import { RequestHandler } from "express";

import { Note } from "../models/note";

export const createNote: RequestHandler = async (req, res, next) => {
  try {
    const note = await Note.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: note });
  } catch (error: any) {
    return res.status(403).json({ message: "Error", data: error.message });
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedNote: Note | null = await Note.findByPk(id);
    if (deletedNote) {
      await Note.destroy({ where: { id } });
      return res
        .status(200)
        .json({ message: "Todo deleted successfully", data: deletedNote });
    } else {
      return res
        .status(403)
        .json({ message: "Error", data: "Given id not available" });
    }
  } catch (error: any) {
    return res.status(403).json({ message: "Error", data: error.message });
  }
};

export const getAllNotes: RequestHandler = async (req, res, next) => {
  try {
    const allNotes: Note[] = await Note.findAll();
    return res
      .status(200)
      .json({ message: "Todo fetched successfully", data: allNotes });
  } catch (error: any) {
    return res.status(403).json({ message: "Error", data: error.message });
  }
};

export const getNoteById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note: Note | null = await Note.findByPk(id);
    if (note) {
      return res
        .status(200)
        .json({ message: "Note fetched successfully", data: note });
    } else {
      return res
        .status(403)
        .json({ message: "Error", data: "Given id not available" });
    }
  } catch (error: any) {
    return res.status(403).json({ message: "Error", data: error.message });
  }
};

export const updateNote: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Note.update({ ...req.body }, { where: { id } });
    const updatedNote: Note | null = await Note.findByPk(id);
    return res
      .status(200)
      .json({ message: "Note updated successfully", data: updatedNote });
  } catch (error: any) {
    return res.status(403).json({ message: "Error", data: error.message });
  }
};
