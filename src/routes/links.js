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
//guardar links
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
//pra listar
router.get('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM links');
    //console.log(links);
    res.render('links/list', { links });
});
//eliminar
router.get('/delede/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    res.redirect('/links');
});
//editar
router.get('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', { link: links[0] });
});
//guardar al editar
router.post('/edit/:id', async(req, res) => {
    const { id } = req.params;
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    res.redirect('/links');
});

//exportar las rutas
module.exports = router;