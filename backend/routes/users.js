// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Criar novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = new User(req.body);
    const salvo = await novoUsuario.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Buscar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
