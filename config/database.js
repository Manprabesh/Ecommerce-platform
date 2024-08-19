const mongoose=require('mongoose')
require('dotenv').config()

try{

    (async()=>{
        const instances=await mongoose.connect(`${process.env.DB_Password}`)
        .then(() => {
            console.log('Database connected')
        }).catch(err => console.error('MongoDB connection error:', err));
        module.exports=instances
    })()
}catch(err){
    console.log(err)
}

console.log()


    // const mongoose = require('mongoose');

    // const uri = 'mongodb+srv://monboruah0986:4QE5J5pqmn5r6YxD@project0.jsyk0.mongodb.net/mydatabase?retryWrites=true&w=majority';

    // mongoose.connect(uri)
    //     .then(() => console.log('MongoDB connected via Mongoose'))
    //     .catch(err => console.error('MongoDB connection error:', err));

