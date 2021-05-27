const express = require('express');
const router = express.Router();
const { projects } = require('../data');


// root route and renders index.pug. Pass project.json
router.get('/', (req, res, next) => {
    res.render('index', { projects });

});


// about page route. renders the about page
router.get('/about', (req, res, next) => {
    res.render('about');
});

// projects/about route render
router.get('/projects/about', (req, res, next) => {
    res.render('about');
});


module.exports = router;