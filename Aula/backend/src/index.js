const express = require('express'); //importa as funcionalidade do express nessa variavel
const cors = require('cors'); //5.2K (gzipped: 2.1K) vai determinar quem vai pode acessar a nossa aplicação
const routes = require('./routes'); //importa as rotas do outro arquivo por isso usa o '/'

const app = express(); //variavel que armazena a aplicação (terá todas as funcionalidades: rotas...)

app.use(cors()); //todas as aplicações front-end vai pode utilizar
app.use(express.json());
//para o aplicativo usa a importação das rotas 
app.use(routes);


/*app.post('/users', (request, response) => {

  // para acessar um parametro vindo requição Query Params
   //const params = request.query;
  
  // para acessar um parametro vindo requição Routes Params
   //const params = request.params;
  
  // para acessar um parametro vindo requição Request Body
   // como nao o express nao vai entender devos o avisa app.use(express.json()); antes de todas as requisições, transformado o json em um objeto javascript
   const body= request.body;
  
   console.log(body);
      
   return response.json({
       evento: 'Semana OmniStack 11.0',
       aluno: 'Luan Guilherme Dantas'
   }); // resposta no formato json
}); */

app.listen(3333); //informa a app para ouvir a porta 3333

