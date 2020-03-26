const express = require('express'); //importa as funcionalidade do express nessa variavel

const app = express(); //variavel que armazena a aplicação (terá todas as funcionalidades: rotas...)

//Primeira rota; '/' rota raiz do node; passando uma 
//função como 2 paramento -> sempre dois paramentro resquest e response
app.get('/', (request, response) => {
 //return response.send('Hello World');  //retornar uma resposta para o cliente que esta acessando, send = texto
 return response.json({
     evento: 'Semana OmniStack 11.0',
     aluno: 'Luan Guilherme'
 }); // respota no formato json
}); 

app.listen(3333); //informa a app para ouvir a porta 3333

