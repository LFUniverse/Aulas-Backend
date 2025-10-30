const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Teste da rota /tarefas', () => {
    let id;
    test('GET/ deve retornar 200', async () => {
        const response = await request.get(url);
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    });

    test('POST/ deve retornar 201', async () => {
        const response = await request.post(url).send({
            nome: "Estudar Express",
            concluida: false,
        });
        expect(response.status).toBe(201);
        expect(response.headers["content-type"]).toMatch(/json/);
        id = response.body["id"];
    });

    test('GET/id deve retornar 200', async () => {
    const response = await request.get(`${url}/${id}`);
    expect(response.headers["content-type"]).toMatch(/json/);
    });

    test('GET/id retorna 404', async () => {
        const response = await request.get(`${url}/1`);
        expect(response.status).toBe(404);
        expect(response.headers["content-type"]).toMatch(/json/);
    });

    test('PUT/id retorna 200', async () => {
        const response = await request.put(`${url}/${id}`).send({ nome: "Estudar para P1", concluida: true});
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body.id).toBe(id);
    });

    test('DELETE/id retornar 204', async () => {
        const response = await request.delete(`${url}/${id}`);
        expect(response.status).toBe(204);
        expect(response.body).toStrictEqual({});
    });

    test('Delete/1 retorna 404', async () => {
        const response = await request.delete(`${url}/1`);
        expect(response.status).toBe(404);
        expect(response.body['msg']).toBe("Tarefa não encontrada");
        expect(response.headers["content-type"]).toMatch(/json/);
    })
})
