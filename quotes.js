const express=require('express');
const router=express.Router();
const Quote= require('../models/quotes');
const res = require('express/lib/response');

router.get('/', async(req,res)=>{
    const quotes=await quotes.find();
    res.sendStatus(200).json(quotes);
})

router.post('/',async(req,res)=>{
    const quote=new Quote({
        author: req.body.author,
        quote: req.body.quote
    })
    try{
        const newQuote=await quote.save();
        res.status(201).json(newQuote);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

module.exports=router;