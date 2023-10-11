const express = require('express');
const cors = require('cors');
const app = express();


app.use(function (req, res, next) {
  app.use(cors())
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080/sicojurr/usuarios');
});
