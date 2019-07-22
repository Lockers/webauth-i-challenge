const express = require('express');
const helmet = require('helmet');
const userRouter = require('./usersRouter/userRouter')
const cors = require('cors')

const server = express();

server.use(helmet());
server.use(express.json())
server.use(cors())
server.use('/', userRouter)

module.exports = server;