const mongoose = require('mongoose');

//const mongourl = 'mongodb://localhost:27017/Marriage_Certificate';

const mongourl = 'mongodb+srv://tanisha:12345@marriagecertificate.jngk5.mongodb.net/'

mongoose.connect(mongourl);

const db = mongoose.connection; 

db.on('connected', () => {

    console.log('Connected to MongoDB server');

});



db.on('error', (error) => {

    console.error('MongoDB connection error:', error);

});



db.on('disconnected', () => {

    console.log('MongoDB disconnected'); 

});



module.exports = db;
