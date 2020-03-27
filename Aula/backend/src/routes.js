const express = require('express');
// importo o js OngController
const OngController = require('./controllers/OngController');
//  importo o js IncidentsController
const IncidentController = require('./controllers/IncidentController');
//  importo o js ProfileController
const ProfileController = require('./controllers/ProfileController');
//  importo o js Sessionontroller
const SessionController = require('./controllers/SessionController');

//Desaclopa o modulo Routers do express em uma nova variavel
const routes = express.Router();

// Rota para lista todas as ONGs da tabela 
routes.get('/ongs', OngController.index);
// Rota para adicional uma ONG na tabela 
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// rota de login
routes.post('/sessions', SessionController.create);


//deixar rotas disponiveis para o app possa acessa
module.exports = routes;