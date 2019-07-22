const db = require('../usersRouter/userHelper')
const bcrypt = require('bcryptjs');

module.exports = 
    authUser = (req, res, next) => {
    try {
        findUser(req.body)
            .then(response => {
                if (response[0].username && bcrypt.compareSync(req.body.password, response[0].password)) {
                    next()
                } else {
                    res.status(404).json({Error: 'You shall not Pass'})
                }
        })
        }
        catch (error) {
            res.status(500).json({ Error: 'Internal Server Error' })
        }
    }
