// IMPORTAÇÕES DAS DEPENDÊNCIAS DO APP
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// IMPORTAÇÃO DAS CONFIGURAÇÕES DO .ENV
require('dotenv').config();

//IMPORTAÇÃO DOS MIDDLEWARES
const middlewares = require('./middlewares');

// IMPORTAÇÃO DA API
const api = require('./api');

const app = express();

// DECLARANDO AS DEPENDÊNCIAS QUE SERÃO USADAS PELO APP
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// ROTA DE ACESSO PARA A API 
app.use('/api/v1', api);

// DECLARAÇÕES PARA O USO DAS FUNÇÕES DE MIDDLEWARES
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// EXPORTAÇÃO DO APP
module.exports = app;
