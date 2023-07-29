const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://gopal934gupta:hello123@cluster0.w8sz6bu.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
const db= mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Connected to Database'));

const quoteRouter=require('./routes/quotes');
app.use('/quote',quoteRouter);

app.use('/',(req,res)=>{
    res.send('hello world');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.listen(5050, ()=>console.log('server started on the port 5050'));    //3000 for your react & 5050 is for your backend