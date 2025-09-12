const express = require ("express");

//moddleware de rota
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Chegou aqui");
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send("Inserido com sucesso");
})

router.get("/:id", (req, res) => {
    const { id } = req.params; // {id: 1, para,2: 5, param3: 6}
    if ( id == 1 ) return res.send ("Achei");
    throw Error("Não achei");
})

router.put("/:id", (req,res) => {
    const { id } = req.params;
    if ( id == 1 ) return res.send("Tarefa alterada");
    res.send(404).send("Tarefa não encontrada");
})
router.delete("/:id", (req,res) => {
    res.status(204).end();//sem corpo 
})