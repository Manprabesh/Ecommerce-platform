const mongoose = require('mongoose');

try {
    const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    });

    module.exports = mongoose.model('user', userSchema);
} catch (err) {
    console.log(err);
}
