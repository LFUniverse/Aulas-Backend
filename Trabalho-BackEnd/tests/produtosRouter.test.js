const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

let produtoId = null;
let tokenValido = null;

describe("Testes do recurso /produtos", () => {
    test("POST /produtos → deve criar um produto e retornar 201 + JSON", async () => {
        const resposta = await request
            .post("/produtos")
            .send({
                nome: "Notebook Dell",
                preco: 4500,
                estoque: 12
            })
            .expect("Content-Type", /json/)
            .expect(201);

        expect(resposta.body).toHaveProperty("_id");
        expect(resposta.body).toHaveProperty("nome", "Notebook Dell");
        expect(resposta.body).toHaveProperty("preco", 4500);
        expect(resposta.body).toHaveProperty("estoque", 12);
        produtoId = resposta.body._id;
    });

    test("POST /produtos → sem JSON deve retornar 422", async () => {
        const resposta = await request
            .post("/produtos")
            .send({})
            .expect("Content-Type", /json/)
            .expect(422);

        expect(resposta.body).toHaveProperty("msg", "Nome, preço e estoque são obrigatórios");
    });

    test("GET /produtos → deve retornar lista de produtos e 200", async () => {
        const resposta = await request
            .get("/produtos")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(Array.isArray(resposta.body)).toBe(true);
    });

    test("GET /produtos/:id → deve retornar produto e 200", async () => {
        const resposta = await request
            .get(`/produtos/${produtoId}`)
            .expect("Content-Type", /json/)
            .expect(200);

        expect(resposta.body).toHaveProperty("_id", produtoId);
        expect(resposta.body).toHaveProperty("nome");
    });

    test("DELETE /produtos/:id → deve excluir e retornar 204", async () => {
        await request
            .delete(`/produtos/${produtoId}`)
            .expect(204);
    });

    test("GET /produtos/:id → produto removido deve retornar 404", async () => {
        const resposta = await request
            .get(`/produtos/${produtoId}`)
            .expect("Content-Type", /json/)
            .expect(404);

        expect(resposta.body).toHaveProperty("msg", "Produto não encontrado");
    });
})