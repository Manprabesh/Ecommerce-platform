const mongoose=require('mongoose')

try{

    (async()=>{
        const instances=await mongoose.connect('mongodb+srv://monboruah0986:4QE5J5pqmn5r6YxD@project0.jsyk0.mongodb.net/Ecommerce-plarform')
        .then(() => {
            console.log('Database connected')
        }).catch(err => console.error('MongoDB connection error:', err));
        module.exports=instances
    })()
}catch(err){
    console.log(err)
}