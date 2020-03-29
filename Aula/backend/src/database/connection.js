// importo o knex
const knex = require('knex');

// importo a configuração do arquivo knexfile.js
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;  
// criar conecxão utilizando o knex
const connection = knex(config);

// exporto do arquivo nossa conecxão cm o banco
module.exports = connection;

// depois eporto no code que vai utilizar essa conecxão