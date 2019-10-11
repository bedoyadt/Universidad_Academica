const express = require('express');
//muestra por consolo las peticiones que van yagando
const morgan = require('morgan');
//motor de plantilla
const express_handlebars = require('express-handlebars');
//
const path = require('path');




//inicializar la base de datos o la conection
const app = express();


//configuracion del servidor
//settings
app.set('port', process.env.PORT || 5000);
//para desir donde esta la carpeta views
app.set('views', path.join(__dirname, 'views'));
//configurando el motor de platilla express_handlebars
app.engine('.hbs', express_handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
//para utilizar el motor "engine ",hbs""
app.set('view engine', '.hbs');




//Middiewares
//son funciones que cada ves un usuario pida una oeticion 
//o peticion al servidor
app.use(morgan('dev'));
//es para hacetar los datos que me manden 
//para poder hacetar los datos que me enbienen los usuarios 
//xtended: false  es para de sirle que solo voy aresivir datos de string y hacetar imagenes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//varibles glovales
//
app.use((req, res, next) => {
    next();
});


//rutas. las url del servidor
app.use(require('./routes/index'));
app.use(require('./routes/autenticacion'));
app.use('/links', require('./routes/links'));

//public
//todo el codigo que el nabegador pueda aceder
app.use(express.static(path.join(__dirname, 'public')));


//para en pesar el servidor
app.listen(app.get('port'), () => {
    console.log('en elservidor 5000', app.get('port'));
});