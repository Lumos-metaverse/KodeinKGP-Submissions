const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

router.get('/' , async (req,res) => {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
})

router.post('/',async(req,res) => {
    const quote = new Quote({
        author : req.body.author,
        quote : req.body.quote
    })
    try{
        const newQuote = await quote.save();
        res.status(201).json(newQuote);
    }catch (error) {
        res.status(400).json({message : error.message});
    }
})

module.exports = router;