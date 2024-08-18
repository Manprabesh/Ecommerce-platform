const mongoose = require('mongoose');

try {
    // const mongoose = require('mongoose');

    // const uri = 'mongodb+srv://monboruah0986:4QE5J5pqmn5r6YxD@project0.jsyk0.mongodb.net/mydatabase?retryWrites=true&w=majority';

    // mongoose.connect(uri)
    //     .then(() => console.log('MongoDB connected via Mongoose'))
    //     .catch(err => console.error('MongoDB connection error:', err));


    const userSchema = new mongoose.Schema({
        name: String
    });

    module.exports = mongoose.model('user', userSchema);
} catch (err) {
    console.log(err);
}
