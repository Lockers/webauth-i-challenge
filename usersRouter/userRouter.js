const express = require('express');
const router = express.Router();
const restricted = require('../auth/restricted-middleware.js');
const db = require('./userHelper');

router.get('/users', (req, res) => {
    db.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});


module.exports = router;