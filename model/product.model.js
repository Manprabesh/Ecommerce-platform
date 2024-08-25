const mongoose=require('mongoose')

const product_schema=mongoose.Schema({
    product_name:{
        type:String,
    },
    product_description:{
        type:String
    }
})

module.exports=mongoose.model('product',product_schema)