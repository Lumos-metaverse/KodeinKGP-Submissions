const express = require('express');
const router = express.Router();
const Quote = require('../modules/quote');

router.get('/',async(req, res)=>{
    const quotes = await Quote.find();
    res.status(200).json(quotes);
})

router.post('/',async (req,res)=>{ 
    const quote =new Quote({
        auther : req.body.auther,
        quote: req.body.quote  
    })
    try{
        const newQuote = await quote.save();
        res.status(201).json(newQuote);
    }
    catch(err){
        res.status(400).json({message: err.massage});
    }
})

module.exports = router;
