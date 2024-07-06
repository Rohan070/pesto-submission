const request = require("supertest");
const app = require("../index.js");



describe('GET /', () => {
    it('responds with "Hello there you are on todo Application server"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello there you are on todo Application server');
    });
});

describe("Post /all", () => {
    it("should return all products", async () => {
        jest.setTimeout(10000);
        await new Promise(resolve => setTimeout(resolve, 3000));
        const userId = "66856a45137ed19d399df98b"; // Replace with a valid user ID
        const requestBody = {
            userId: userId
        };

        const res = await request(app)
            .post("/filters/all")
            .send(requestBody);

        expect(res.statusCode).toBe(200);
    });
});

