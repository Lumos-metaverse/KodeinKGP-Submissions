require('dotenv').config()
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://filza:filza21123@cluster0.b6ffqfr.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error)=> console.log(error));
db.once('open',()=> console.log('connected to database'));

const quoteRouter= require('./routes/quote');
const bodyParser = require('body-parser');
app.use('/quote', quoteRouter);

app.use('/',(req,res)=>{
    res.send("Hello World");
}
)

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false}))
app.listen(5050,()=> console.log('server started on portal 5050'));

