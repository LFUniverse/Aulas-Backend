const mongoose = require("mongoose");

const produtosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  validade: { type: String, required: true }
});

module.exports = mongoose.model("Produto", produtosSchema);
