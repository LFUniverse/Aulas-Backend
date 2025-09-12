//Importa o framework
const express = require ("express");

//Importar meddleware de terceiros
const cors = require('cors');

//Importa middleware de rota
const router = require('./routerTarefas');

//Cria uma instancia da aplicação
const app = express();

//Middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({extended: false})); //?param1=valor&param2=valor2

//Middleware de terceiros
app.use(cors());


//middlewaew de aplicação
app.use((req, res, next) => {
    console.log("Passei aqui");
    next();
});

app.use('/tarefas', router);

// middleware de erro
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Algo de errado não está certo!");
})

//Iniciar a aplicação
app.listen(3000,() => {
    console.log("App está ON!")
})