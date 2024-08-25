const express=require('express')
const router=express.Router();
const path=require('path')
const userModel=require('../model/user.moodel')
require('dotenv').config()
const bcrypt = require('bcrypt');


router.post('/',async (req,res)=>{
    let{email,password}=req.body;
    let user = await userModel.findOne({ email })
    if(process.env.admin_email===email){
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){

                res.sendFile(path.join(__dirname,"../public","admin.html"))
            }
            else{
                res.send("Something went wrong")
            }
        });
    }
    else if(user){
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                res.redirect('/profile')
            }
            else{
                res.send("something went wrong")
            }
        });
    }
})
module.exports=router