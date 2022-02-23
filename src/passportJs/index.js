const fs = require('fs')
const express =  require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('./passport-jwt')

const app = express()

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())

app.post('/login', (req, res) => {
    const {username, password} = req.body
    if(username == "luan") {
        let payload  = {username: username}
        jwt.sign(payload,"secret", {expiresIn: "1m"}, (err, token) => {
            res.send(token)
        })
    }
})

app.get('/login',passport.authenticate('jwt'), (req, res) => {
    console.log(req.user)
    const path = process.argv[2];
    fs.readFile(path,{encoding: "utf-8"}, (err,data) => {
        res.send(data)
    })
})

app.listen(3000, () => console.log('listening on port 3000'))