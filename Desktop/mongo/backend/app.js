const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/catalogoFilmes', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

const filmesRoutes = require('./routes/filmes');
app.use(express.json());
app.use('/filmes', filmesRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
