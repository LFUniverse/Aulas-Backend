const produtosModel = require("../models/produtosModel");

// POST /produtos
async function criar(req, res) {
  try {
    const novoProduto = await produtosModel.create({
      nome: req.body.nome,
      quantidade: req.body.quantidade,
      validade: req.body.validade
    });

    return res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(422).json({ msg: "Dados inválidos para criar produto" });
  }
}

// POST /produtos/renovar
async function renovar(req, res) {
  try {
    const produto = await produtosModel.findOne({ nome: req.body.nome });

    if (!produto) {
      return res.status(404).json({ msg: "Produto não encontrado" });
    }

    produto.validade = req.body.validade;
    await produto.save();

    return res.status(200).json({ msg: "Validade renovada", produto });
  } catch (error) {
    return res.status(400).json({ msg: "Erro ao renovar produto" });
  }
}

// DELETE /produtos
async function excluir(req, res) {
  try {
    const resultado = await produtosModel.deleteOne({ nome: req.body.nome });

    if (resultado.deletedCount === 0) {
      return res.status(404).json({ msg: "Produto não encontrado" });
    }

    return res.status(200).json({ msg: "Produto excluído com sucesso" });
  } catch (error) {
    return res.status(400).json({ msg: "Erro ao excluir produto" });
  }
}

module.exports = { criar, renovar, excluir };