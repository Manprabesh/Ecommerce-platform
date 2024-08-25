const express=require('express');
const app=express()
const router=express.Router()
const path=require('path')
// app.use(express.static(path.join(__dirname, 'public')));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
    console.log(path.join(__dirname, '../public', 'index.html'))
    console.log(path.join(__dirname, 'public', 'index.html'))
    console.log(path.join(__dirname))
    console.log(path.join())
})
module.exports=router