const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    atoresPrincipais: [String],
    genero: String,
    descricao: String,
    favorito: { type: Boolean, default: false }
});

module.exports = mongoose.model('Filme', filmeSchema);
