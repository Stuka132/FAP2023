const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.route('/')
    .get(clientController.listClients)
    .post(clientController.createClient);

router.route('/:id')
    .get(clientController.getClient)
    .put(clientController.updateClient)
    .delete(clientController.deleteClient);

module.exports = router;
