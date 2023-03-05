import supertest from "supertest";
import createServer from "../utils/server";
import { Note } from "../models/note";
import connection from "../db/testconfig";

const app = createServer();

describe("Test delete note by id", () => {
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
    it("should return 200 and null", async () => {
      const noteid = "100";
      const { body, statusCode } = await supertest(app).delete(
        `/api/note/${noteid}`
      );
      expect(statusCode).toBe(403);
    });
  });

  describe("Given noteid does exit", () => {
    it("should return 200 and the product", async () => {
      const input = { title: "deleteproduct", note: "test note" };
      const note = await Note.create(input);
      const { body, statusCode } = await supertest(app).delete(
        `/api/note/${note.id}`
      );
      expect(statusCode).toBe(200);
      expect(body.data.id).toBe(note.id);
      expect(body.data.title).toBe(input.title);
      expect(body.data.note).toBe(input.note);
    });
  });
});
