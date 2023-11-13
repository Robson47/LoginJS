// IMPORTANDO O MÓDULO "DATATYPES" DO SEQUELIZE
const { DataTypes } = require('sequelize');
// IMPORTANDO O MÓDULO SEQUELIZE
const sequelize = require('sequelize');

const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unsigned: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;