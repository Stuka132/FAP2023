const express = require('express');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.use(express.json());
app.use('/clientes', clientRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
