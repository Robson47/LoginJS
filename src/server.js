// IMPORTAÇÃO DO APP
const app = require('./app');

// IMPORTAÇÃO DA "PORT" DO SERVIDOR
const port = process.env.PORT;

// CONFIGURAÇÃO PARA QUE O APP ATENDA AO "PORT"
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
