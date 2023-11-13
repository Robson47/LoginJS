// FUNÇÃO CASO NÃO SEJA ENCONTRADO RESULTADO
function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// FUNÇÃO PARA LIDAR COM ERROS
function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

// EXPORTAÇÃO DAS FUNÇÕES
module.exports = {
  notFound,
  errorHandler,
};
