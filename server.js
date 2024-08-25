const express = require('express')
const app = express();
const db = require('./config/database')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config()

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const register=require('./routes/register')
const isLoggedin = require('./middlewares/isLoggedIn')


app.get('/profile', isLoggedin, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
})

//requiring routes and using
app.use('/register', require('./routes/register'))
app.use('/logout', require('./routes/logout'))
app.use('/form', require('./routes/form'))
// app.use('/admin',require('./routes/login_and_admin'))
app.use('/login',require('./routes/login_and_admin'))
app.use('/product',require('./routes/product_upload'))

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'))
})

// console.log(app.use(express.static(path.join(__dirname, 'public'))))
// app.get('/form', (req, res) => {
// })
// process.env.PORT=8080;

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is listening on port ${process.env.PORT}`)
    // console.log(`Db_URl ${process.env.DB_Password}`)
})