const Sequelize = require('sequelize');
const database = require("../config/db_config.js")

const Tip = database.define("tip", {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
    })

    module.exports = Tip;


    /* TODO: implementar os relacionamentos entre as tabelas
    - Adicionar Autor (Users), baseado no nome do usuário lá do     firebase    
    */   