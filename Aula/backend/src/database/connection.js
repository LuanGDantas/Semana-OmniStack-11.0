// importo o knex
const knex = require('knex');
// importo a configuração do arquivo knexfile.js
const confiuration = require('../../knexfile');
// criar conecxão utilizando o knex
const connection = knex(confiuration.development);

// exporto do arquivo nossa conecxão cm o banco
module.exports = connection;

// depois eporto no code que vai utilizar essa conecxão