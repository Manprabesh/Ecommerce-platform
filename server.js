const expres=require('express')
const app=expres();
const db=require('./config/database')
const userModel=require('./model/user.moodel')

try{
    app.get('/',async (req,res)=>{
        try{

            await userModel.create({
                name:"porche"
            })
            res.send("working")
        }catch(err){
            console.log(err.message)
        }
    })

}
catch(err){
    console.log(err.message)
}


// process.env.PORT=8080;

app.listen(process.env.PORT||3000,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})