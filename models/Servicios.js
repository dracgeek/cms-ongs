const Sequelize = require('sequelize');
const db = require('./../db/connect');

const Servicios = db.define('servicios', {
 id_servicio: {
     type: Sequelize.INTEGER,
     autoIncrement: true,
     primaryKey: true
 }
});

module.exports = Servicios;