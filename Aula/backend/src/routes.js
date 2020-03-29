const express = require('express');
const { celebrate, Segments, Joi }  = require('celebrate');

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

routes.post('/ongs', celebrate({
 [Segments.BODY]: Joi.object().keys({
   name: Joi.string().required(),
   email: Joi.string().required().email(),
   whatsapp: Joi.string().required().min(10).max(11),
   city: Joi.string().required(),
   uf: Joi.string().required().length(2),
 })
}), OngController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

// rota de login
routes.post('/sessions', SessionController.create);


//deixar rotas disponiveis para o app possa acessa
module.exports = routes;