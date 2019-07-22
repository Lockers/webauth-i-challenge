const knex = require('knex');
const db = knex(require('../knexfile').development);
const bcrypt = require('bcryptjs');

addUser = (newUser) => {
    newUser.password = bcrypt.hashSync(newUser.password, 12)
    return db('users')
        .insert(newUser)
}

findUser = (user) => {
    return db('users')
        .select('username', 'password')
        .where({ 'username': user.username})
}

module.exports = {
    addUser,
    findUser
}