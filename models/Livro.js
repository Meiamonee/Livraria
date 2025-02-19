// models/Livro.js
const mongoose = require('mongoose');

// Definindo o esquema para os livros
const livroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  classificacaoEtaria: {
    type: String,
    required: true
  },
  promocao: {
    type: Boolean,
    default: false
  }
});

// Criando o modelo de Livro
const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
