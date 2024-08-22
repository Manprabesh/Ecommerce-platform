const express = require('express')
const app = express();
const db = require('./config/database')

require('dotenv').config()
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const path = require('path')


// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//requiring routes
// const register=require('./routes/register')


const isLoggedin = require('./middlewares/isLoggedIn')
app.get('/profile', isLoggedin, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
})

app.use('/login', require('./routes/register'))
app.use('/logout', require('./routes/logout'))
app.use('/form', require('./routes/form'))

// console.log(app.use(express.static(path.join(__dirname, 'public'))))
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/form', (req, res) => {

// })



// process.env.PORT=8080;

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is listening on port ${process.env.PORT}`)
    // console.log(`Db_URl ${process.env.DB_Password}`)
})