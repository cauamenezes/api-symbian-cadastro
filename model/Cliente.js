const Sequelize = require('sequelize');

const connection = require('../database/database');

const Cliente  = connection.define(
    'tblClientes',
    {
        idCliente:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        sobrenome:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(256),
            allowNull: false
        },
        celular:{
            type: Sequelize.STRING(16),
            allowNull: false
        }
    }
);

// Cliente.sync({force:true});

module.exports = Cliente;