const express = require ("express");

const tarefas = [
    { id: 1, nome: "Estudar middleware", concluida: false},
    { id: 2, nome: "Preticar Express", concluida: true}
];

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const dataHora = new Date().toLocaleString("pt-BR");
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});


app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(400).send("Tarefa não localizada");
})

app.listen(3000, () => {
    console.log("App esta ON!")
})

module.exports = app;

const router = express.Router();

router.get("/", (req,res) => {
    res.json(tarefas)
})

router.post("/", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    nome: req.body.nome,
    concluida: req.body.concluida || false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

router.get("/:tarefaId", (req, res, next) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.tarefaId));
  if (!tarefa) {
    return next(new Error("Tarefa não localizada"));
  }
  res.json(tarefa);
});

router.put("/:tarefaId", (req, res, next) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.tarefaId));
  if (!tarefa) {
    return next(new Error("Tarefa não localizada"));
  }
  tarefa.nome = req.body.nome ?? tarefa.nome;
  tarefa.concluida = req.body.concluida ?? tarefa.concluida;
  res.json(tarefa);
});

router.delete("/:tarefaId", (req, res, next) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.tarefaId));
  if (index === -1) {
    return next(new Error("Tarefa não localizada"));
  }
  tarefas.splice(index, 1);
  res.status(204).send();
});

app.use("/tarefas", router);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(400).json({ erro: err.message });
});