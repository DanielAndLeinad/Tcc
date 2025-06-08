require('dotenv').config(); // <- ESSA LINHA DEVE SER A PRIMEIRA

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// CONEXÃO COM MONGODB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro na conexão MongoDB:', err));

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
