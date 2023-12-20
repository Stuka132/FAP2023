const express = require('express');
const bodyParser = require('body-parser')

const clientRoutes = require('./routes/clientRoutes');
const produtosRoutes = require('./routes/produtosRoutes')

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/clientes', clientRoutes);
app.use('/api/v1//produtos', produtosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
