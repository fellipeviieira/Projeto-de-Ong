const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/**Serve pra exportar no node */
module.exports = routes; 

/**
 *  Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do BackEnd (Sempre atualiza a page)
 * POST: Criar info no BackEnd
 * PUT: Alterar info no BackEnd
 * DELETE: Deletar info no BackEnd
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtos, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de Dados
 * 
 * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/** Pra fazer a comunicação dos nossos Bancos de Dados precisamos de ... 
 * Driver do banco de dados (Pacote oficial do banco de dados): SELECT * FROM users
 * Query Builder: table:('users).select('*').where()
 *  */