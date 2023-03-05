import supertest from "supertest";
import createServer from "../utils/server";
import { Note } from "../models/note";
import connection from "../db/config";

const app = createServer();

describe("Test get note by id", () => {
  beforeAll(async () => {
    await connection
      .sync()
      .then(() => {
        console.log("Database successfully connected");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });

  describe("Given noteid does not exit", () => {
    it("should return 403", async () => {
      const noteid = "100";
      await supertest(app).get(`/api/note/${noteid}`).expect(403);
    });
  });

  describe("Given note id does exit", () => {
    it("should return 200 and the note", async () => {
      const input = { title: "get note by id", note: "test note" };
      const note = await Note.create(input);
      const { body, statusCode } = await supertest(app).get(
        `/api/note/${note.id}`
      );
      expect(statusCode).toBe(200);
      expect(body.data.id).toBe(note.id);
      expect(body.data.title).toBe(input.title);
      expect(body.data.note).toBe(input.note);
      await Note.destroy({ where: { id: note.id } });
    });
  });
});
