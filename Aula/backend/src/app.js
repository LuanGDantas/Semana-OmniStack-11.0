const express = require('express'); //importa as funcionalidade do express nessa variavel
const cors = require('cors'); //5.2K (gzipped: 2.1K) vai determinar quem vai pode acessar a nossa aplicação
const { errors } = require('celebrate');
const routes = require('./routes'); //importa as rotas do outro arquivo por isso usa o '/'

const app = express(); //variavel que armazena a aplicação (terá todas as funcionalidades: rotas...)

app.use(cors()); //todas as aplicações front-end vai pode utilizar
app.use(express.json());
//para o aplicativo usa a importação das rotas 
app.use(routes);
app.use(errors());

module.exports = app;

