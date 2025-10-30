// objetivo cliente do mongodb
const {MongoClient} = require("mongodb");

// string de conexão
const url = "mongodb+srv://Luis:abcd1234@cluster0.r2an7tg.mongodb.net/"

const client = new MongoClient(url);

async function conecta() {
    try {
        await client.connect();
        return client.db("agenda");
    } catch (e) {
        console.log("Erro ao conectar no MongoDB", e.message);
    }
}

module.exports = conecta;