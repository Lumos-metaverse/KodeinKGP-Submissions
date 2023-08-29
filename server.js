require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');  

mongoose.connect('mongodb+srv://varshachepuri:Amma%401234@cluster0.14yjapf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log('Connected to Database WOW!!'));

const quoteRouter = require('./routes/quote');
app.use('/quote',quoteRouter);

app.use('/',(req,res) => {
    res.send('Hello World'); //Is this is a send request to the database ..and if we need it fron database just use get request
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.listen(5050,() => console.log('Server started on port 5050'));