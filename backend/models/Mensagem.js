// models/Mensagem.js
const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
  remetente: { type: String, required: true },
  conteudo: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mensagem', mensagemSchema);
