const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

const url = [];
let id = null;

describe("Testes do recurso /produtos", () => {
    test("POST /produtos, deve retornar 201", async () => {
        const response = await request.post(url).send({ nome: "Laranja", preço: 10.0 });
        expect(response.status).toBe(201);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preço).toBe(10.0);
        id = response.body._id;
    });

    
    test("POST /pordutos, erro deve retornar 422", async () => {
        const response = await request.post(url).send({});
        expect(response.status).toBe(422);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body).toHaveProperty("msg", "Nome e preço do produto são obrigatórios");
    });

    test("GET / deve retornar 200", async () => {
        const response = await request.get(url);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});