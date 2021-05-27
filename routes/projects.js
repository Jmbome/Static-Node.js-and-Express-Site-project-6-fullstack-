const express = require('express');
const router = express.Router();
const { projects } = require('../data');


//projects route
router.get('/projects/:id', (req, res, next) => {
    // finds a project in projects array with with the right id 
    const project = projects[req.params.id];
    if (project) {
        res.render('project', { project });
        
    } else {
        const err = new Error('Project file does not exist');
        console.log('Project not Found');
        err.status = 404;
        next(err);
    }
});



module.exports = router;