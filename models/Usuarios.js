const Sequelize = require('sequelize');
const db = require('../db/connect.js');
const Roles = require('./Roles');

 const Usuarios = db.define('usuarios', {
  id_usuario:  {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    ciudad: Sequelize.STRING,
    direccion: Sequelize.STRING,
    fecha_creacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    ultima_sesion: {
        type: Sequelize.DATE
    },
    estado_usuario: Sequelize.INTEGER

 });

 Usuarios.belongsTo(Roles);

 module.exports = Usuarios;