const express = require('express');
const path =  require('path');

const app = express();
// require db
const db = require('./db/connect');

// modelos
require('./models/Roles');
require('./models/Usuarios');
require('./models/TipoPropiedad');
require('./models/Propiedades');
require('./models/Servicios');
require('./models/adminPropiedades');
require('./models/Transacciones');

db.sync()
    .then(() => console.log('Conectado al Servidor de la BD'))
    .catch(error => console.log(error));


app.set('port', 4000 || process.env.PORT);
// habilitar body parser
app.use(express.urlencoded({extended: true}));

/// rutas


app.listen(app.get('port'), () => {
    console.log(`El servidor está corriendo en el puerto ${app.get('port')}`);
});

