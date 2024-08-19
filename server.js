const express=require('express')
const app=express();
const db=require('./config/database')
const userModel=require('./model/user.moodel')
require('dotenv').config()

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//requiring routes
// const register=require('./routes/register')

app.use('/login',require('./routes/register'))

const path=require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})



// process.env.PORT=8080;

app.listen(process.env.PORT||3000,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
    // console.log(`Db_URl ${process.env.DB_Password}`)
})