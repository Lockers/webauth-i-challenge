const db = require('../usersRouter/userHelper')
const bcrypt = require('bcryptjs');

module.exports = 
    authUser = (req, res, next) => {
    try {
        findUser(req.body)
            .then(response => {
                console.log(response)
                if (bcrypt.compareSync(req.body.password, response[0].password)) {
                    req.headers.username = req.body.username
                    req.headers.password = req.body.password
                    next()
                } else {
                    res.status(404).json({Error: 'User is NOT authed'})
                }
        })
        }
        catch (error) {
            res.status(500).json({ Error: 'Internal Server Error' })
        }
    }
