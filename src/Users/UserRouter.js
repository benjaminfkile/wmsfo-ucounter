const express = require('express')
const userService = require('./UserService');
const userRouter = express.Router()
const jsonParser = express.json()

userRouter
    .route('/getUserCount')
    .get((req, res, next) => {
        console.log(userService.getUsers())
        res.send({users: userService.getUsers()})
    })

userRouter
    .route('/ping')
    .post(jsonParser, async (req, res, next) => {
        userService.ping({id: req.body.id})
        res.send({msg: 'ping'})
    })
module.exports = userRouter