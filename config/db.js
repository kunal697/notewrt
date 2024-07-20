require('dotenv').config();
console.log('MONGO_URL:', process.env.MONGO_URL);  
console.log('PORT:', process.env.PORT); 

const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://kunal:kunal697@cluster0.ntwmivg.mongodb.net';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongodb..");
});

db.on('error', (err) => {
    console.log("err :", err);
});

db.on('disconnected', () => {
    console.log("disconnected with mongodb..");
});

module.exports = db;