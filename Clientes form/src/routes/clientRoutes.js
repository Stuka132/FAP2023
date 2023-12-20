const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

const clientRoutes = router.route('/');
const clientRoutesWithId = router.route('/:id');

clientRoutes.get(clientController.listClients);
clientRoutes.post(clientController.createClient);

clientRoutesWithId.get(clientController.getClient);
clientRoutesWithId.put(clientController.updateClient);
clientRoutesWithId.delete(clientController.deleteClient);

module.exports = router;
