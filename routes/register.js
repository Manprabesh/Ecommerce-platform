const express=require('express')
const router=express.Router()
const userModel=require('../model/user.moodel')

router.post('/',async (req,res)=>{
    try{
        let{email,password,name}=req.body;
        console.log(email)
        await userModel.create({
            name,
            email,
            password
        })
        res.send("working")
    }catch(err){
        console.log(err.message)
    }
})

module.exports=router