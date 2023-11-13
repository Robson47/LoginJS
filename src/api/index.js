// IMPORTAÇÃO DO EXPRESS
const express = require('express');

//IMPORTAÇÃO PARA MANIPULAÇÃO DE ROTAS DO EXPRESS
const router = express.Router();

// ROTA DE GET  
router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// EXPORTAÇÃO DAS ROTAS
module.exports = router;
