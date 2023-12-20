const Cliente = require('../models/clientModel.js');

async function listClients(req, res) {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getClient(req, res) {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createClient(req, res) {
    try {
        const cliente = await Cliente.create(req.body);
        res.json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateClient(req, res) {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            await cliente.update(req.body);
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteClient(req, res) {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            await cliente.destroy();
            res.json({ message: 'Cliente deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    listClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
};
