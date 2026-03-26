📘 README.md – Projeto API RESTful com Node.js, Express e MongoDB
📌 Descrição do Projeto

Este projeto consiste na construção de uma API RESTful utilizando Node.js, Express e MongoDB, com operações completas de CRUD, autenticação simples por token e testes automatizados utilizando Jest e Supertest.

A API foi desenvolvida como parte da atividade acadêmica da disciplina, contendo rotas de criação, listagem, atualização (PUT/PATCH) e exclusão de produtos.

📂 Estrutura do Projeto
├── bin/
│   └── www
├── routes/
│   └── produtos.js
├── models/
│   └── Produto.js
├── tests/
│   └── produtos.test.js
├── .env
├── app.js
├── package.json
└── README.md

🚀 Tecnologias Utilizadas

Node.js

Express

MongoDB / Mongoose

dotenv

Nodemon

Jest

Supertest

Morgan

Cookie-Parser

⚙️ Configuração do Ambiente
1️⃣ Instalar as dependências

Execute no terminal:

npm install

2️⃣ Criar o arquivo .env

Crie o arquivo na raiz do projeto com as variáveis:

MONGODB_USER=seu_usuario
MONGODB_PASSWORD=sua_senha
MONGODB_HOST=seu_cluster.mongodb.net
MONGODB_DATABASE=nomeDoBanco
AUTH_TOKEN=123456789
PORT=3000

▶️ Como Executar o Projeto
👍 Modo desenvolvimento (com reload automático)
npm run dev

🟢 Modo produção
npm start


A API estará acessível em:

http://localhost:3000/produtos

🧪 Como Rodar os Testes

Certifique-se de que todas as dependências estão instaladas.

Execute:

npm test


ou usando --watchAll:

npm run test


Os testes utilizam Jest + Supertest para validar rotas como:

GET /produtos (não autorizado)

GET /produtos com token inválido

POST /produtos

PUT /produtos/:id

PATCH /produtos/:id

DELETE /produtos/:id

📡 Exemplos de Requisições
➕ Criar Produto
POST /produtos
{
  "nome": "Notebook Lenovo",
  "preco": 3500,
  "estoque": 12
}

📄 Listar Produtos
GET /produtos
Authorization: 123456789

✏️ Editar Produto (PATCH)
PATCH /produtos/67a1f21b34c2
{
  "estoque": 99
}

🔄 Atualizar Produto (PUT)
PUT /produtos/67a1f21b34c2
{
  "nome": "Monitor LG",
  "preco": 899,
  "estoque": 30
}

❌ Excluir Produto
DELETE /produtos/67a1f21b34c2

👥 Integrantes do Grupo
Nome	         Função
Luís Fellipe	Desenvolvimento da API

Edite os nomes conforme o seu grupo.

📌 Divisão de Tarefas

Criação das rotas e controllers: Nome 1

Modelagem do banco com Mongoose: Nome 2

Implementação dos testes automatizados: Nome 3

Documentação (README) e organização do projeto: Nome 4

📜 Licença

Este projeto foi desenvolvido exclusivamente para fins educacionais.