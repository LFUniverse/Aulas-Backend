const supertest = require("supertest");

const app = require('../app');

const request = supertest(app);

let id = null;

describe("Teste de recursos /Usuarios", () => {
    Test("POST/ deve retornar 201", async () => {
        const response = await request.post(url).send({ "email": "usuario@email.com", "senha": "abcd1234" });
        expect(response.status).toBe(201);
        id = response.body._id;
    });

    Test("POST/ deve retornar 422", async () => {
        const response = await request.post(url).send({ "email": "", "senha": "" });
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Email e Senha são obrigatórios");
        id = response.body._id;
    });
})

