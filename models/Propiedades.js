const Sequelize = require('sequelize');
const db = require('./../db/connect.js');
const TipoPropiedad = require('./TipoPropiedad');

const Propiedades = db.define('Propiedades', {
  id_propiedades:  {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: { 
    type: Sequelize.STRING 
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  precio:{
     type:Sequelize.DOUBLE(8,2),
     allowNull: false
  },
  sector: Sequelize.STRING(255),
  direccion: Sequelize.STRING(150),
  area: Sequelize.INTEGER,
  banios: Sequelize.INTEGER,
  img_principal: Sequelize.STRING(255),
  img_sec: Sequelize.STRING(255),
  habitaciones: Sequelize.INTEGER,
  cod_referencia: Sequelize.STRING(20),
  estado_disponible: {
     type: Sequelize.INTEGER,
     defaultValue: 1
  }  
});


Propiedades.belongsTo(TipoPropiedad);
module.exports = Propiedades;

