const mongoose = require('mongoose');

require('dotenv').config();




const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            // useUnifiedTopologu:true
        });
        console.log('MongoDB connection Successful');
    } catch (error) {
        console.error('MongoDB connection Fails');
        process.exit(1);
    }
    
}
module.exports = connectDB;