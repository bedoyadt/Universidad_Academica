//index.js es para al masenar todas las rutas principales de mi ap;=licacion
//por ejenplo podia mos traruna vievenidad al el usuario


//lo usamos para expor tar las rutas
const express = require('express');
//lo que ase es de volbermelo en un ojeto y lo al macenamos en una const 'router'
const router = express.Router();
//
const pool = require('../database');
//
const passport = require('passport');
//
router.get('/registrate', (req, res) => {
    res.render('auth/registrate');
});
//
router.post('/registrate', (req, res) => {
    //console.log(req.body);
    passport.authenticate('local.registrate', {
        successRedirect: '/profile',
        failureRedirect: '/registrate',
        failureFlash: true
    });
    res.redirect('/profile');
});
//
router.get('/profile', (req, res) => {
    res.send('frhdfzhtesdjhsdhdrh');
});


//exportar las rutas
module.exports = router;