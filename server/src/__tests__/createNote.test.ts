import supertest from "supertest";
import createServer from "../utils/server";
import { Note } from "../models/note";
import connection from "../db/testconfig";

const app = createServer();

describe("Test create note", () => {
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
    it("should return a 200 and create the product", async () => {
      const productPayload = { title: "createproduct", note: "test note" };
      const { statusCode, body } = await supertest(app)
        .post("/api/note")
        .send(productPayload);
      expect(statusCode).toBe(200);
      expect(body.data.title).toBe(productPayload.title);
      expect(body.data.note).toBe(productPayload.note);
      await Note.destroy({ where: {}, truncate: true });
    });
  });

  describe("invalid input", () => {
    it("should return a 403 and return error", async () => {
      const productPayload = { title: "createproduct" };
      const { statusCode, body } = await supertest(app)
        .post("/api/note")
        .send(productPayload);
      expect(statusCode).toBe(403);
    });
  });
});
