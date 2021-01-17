const express = require('express')
const bodyParser = require('body-parser')
const {User,Favorite} = require('./models/db')
const session = require('express-session')
const cookies = require('cookie-parser')
const loginCon = require('./controller/LoginCon')
const Auth = require('./controller/Auth')
const jwt = require('jsonwebtoken')
const loggerContoller = require('./middleware/Logger')
const {getMovieTitle,getMovie,getFavMovie} = require('./controller/TaskCon')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
//Users
app.post('/user',(req,res)=>{
    User.create(req.body).then(user => res.json(user))
})
app.post('/login',loginCon)

//Movie
//Post
app.post('/movies/favorite',(req,res)=>{
    Favorite.create(req.body).then(fav => res.json(fav))
})
//Get
app.get('/movies',loggerContoller,Auth,getMovie)
app.get('/movies/:title',loggerContoller,Auth,getMovieTitle)
app.get('/movies/favorite',loggerContoller,Auth,getFavMovie)
app.listen(3000)