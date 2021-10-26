/*
Carrasco García Orlando Joshua
2183330113

Ejecutar
npm run dev

Abrir en navegador
http://localhost:3000/

*/ 

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importando rutas
const rutasPersonas = require('./rutas/persona');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'prueba' 	// en windows
}, 'single'));
app.use(express.urlencoded({extend: false}));

// routes
app.use('/', rutasPersonas);

// archivos estaticos
/*  Aqui podremos incluir imagenes o archivos de estilo
	Para esta práctica no fue utilizada.
*/
app.use(express.static(path.join(__dirname, 'publico')));

app.listen(app.get('port'), () =>{
	console.log('Server on port ' + app.get('port'));
});