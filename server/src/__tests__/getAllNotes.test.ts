import supertest from "supertest";
import createServer from "../utils/server";
import { Note } from "../models/note";
import connection from "../db/testconfig";

const app = createServer();

describe("Test get all notes", () => {
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

  describe("Get all notes", () => {
    it("should return a 200 and list of notes", async () => {
      await Note.destroy({ where: {}, truncate: true });
      const input = { title: "getallproduct", note: "test note" };
      const note = await Note.create(input);
      const { statusCode, body } = await supertest(app).get("/api/note");
      expect(statusCode).toBe(200);
      expect(body.data.length).toBe(1);
      await Note.destroy({ where: { id: note.id } });
    });
  });
});
