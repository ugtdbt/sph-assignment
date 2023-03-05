import supertest from "supertest";
import createServer from "../utils/server";
import { Note } from "../models/note";
import connection from "../db/testconfig";

const app = createServer();

describe("Test Update note", () => {
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

  describe("Success", () => {
    it("should return a 200 and update the note", async () => {
      const input = { title: "updateproduct", note: "test note" };
      const note = await Note.create(input);
      const productPayload = { note: "test note" };
      const { statusCode, body } = await supertest(app)
        .put(`/api/note/${note.id}`)
        .send(productPayload);
      expect(statusCode).toBe(200);
      expect(body.data.note).toBe(productPayload.note);
      await Note.destroy({ where: { id: note.id } });
    });
  });
});
