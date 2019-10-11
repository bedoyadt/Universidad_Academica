//index.js es para al masenar todas las rutas principales de mi ap;=licacion
//por ejenplo podia mos traruna vievenidad al el usuario


//lo usamos para expor tar las rutas
const express = require('express');
//lo que ase es de volbermelo en un ojeto y lo al macenamos en una const 'router'
const router = express.Router();
//requiriendo la base de datos
//pool es la conection 
const pool = require('../database');
//
router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async(req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    //console.log(newLink);
    await pool.query('INSERT INTO links set ?', [newLink]);
    res.redirect('/links');
});

router.get('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM links');
    //console.log(links);
    res.render('links/list', { links });
});



//exportar las rutas
module.exports = router;