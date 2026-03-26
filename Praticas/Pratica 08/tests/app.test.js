const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

const produtos = "/produtos";

test("GET/produtos deve retornar 401", async () => {
    const response = await request.get(produtos);
    expect(response.status).toBe(401);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.msg).toBe("Não autorizado");
});

test("GET/produtos deve dar Token invalido", async () => {
    const response = await request
    .get(`${produtos}/${id}`)
    .send('authorization', '123456789');
    expect(response.status).toBe(401);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.msg).toBe("token invalido");
});

test("POST / deve retornar 200", async () => {
    const response = await request
    .post(produtos)
    .send({  
        usuario: "email@exemplo.com",
        senha: "abcd1234"
    });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(Array.isArray(response.body.token)).toBe(true);
});