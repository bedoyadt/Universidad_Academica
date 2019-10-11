//index.js es para al masenar todas las rutas principales de mi ap;=licacion
//por ejenplo podia mos traruna vievenidad al el usuario


//lo usamos para expor tar las rutas
const express = require('express');
//lo que ase es de volbermelo en un ojeto y lo al macenamos en una const 'router'
const router = express.Router();
//requiriendo la base de datos
const pool = require('../database');
//
router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', (req, res) => {
    res.send('mensaje resivido');
});




//exportar las rutas
module.exports = router;