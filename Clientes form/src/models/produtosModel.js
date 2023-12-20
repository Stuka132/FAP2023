const sequelize = require('../../DBs/database.js');
const { DataTypes } = require('sequelize');

const Produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quant:{
        type: DataTypes.INTEGER
    },
    valor:{
        type: DataTypes.FLOAT
    },
    categoria: {
        type: DataTypes.STRING,
    },
    marca: {
        type: DataTypes.STRING,
    },
    dataValidade: {
        type: DataTypes.DATE,
    },
    peso: {
        type: DataTypes.FLOAT,
    }
});

module.exports = Produtos;