const express=require('express')
// const app=express()
const cookieParse=require('cookie-parser')
// app.use(cookieParse())
require('dotenv').config()
const jwt = require('jsonwebtoken');


try{

    function isLoggedin(req,res,next){
        if(req.cookies.token==""){
            res.send("token empthy")
        }
        else {
            jwt.verify(req.cookies.token,process.env.JWT_key , function (err, decoded) {
                if(err){
                    console.log(err.message)
                }
                // console.log(decoded.JWT_key) // bar
                // req.user=decoded;
            });
            next()
        }
    }

    module.exports=isLoggedin
}catch(err){
    console.log(err.message)
}
