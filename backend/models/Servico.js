const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: String,
  dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Servico', servicoSchema);
