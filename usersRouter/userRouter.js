const express = require('express');
const router = express.Router();
const db = require('./userHelper')
const authUser = require('../middleware/authUser')


router.post('/api/register', (req, res) => {
    addUser(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})

router.post('/api/login', authUser, (req, res) => {

    res.status(200).json({ Message: 'Working' })
})

router.get('/api/users', (req, res) => {
    res.status(200).json({ Message: 'Working' })
})

module.exports = router;