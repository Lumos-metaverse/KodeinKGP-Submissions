const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    author:{
        type: String,
},
quote:{
    type: String,
}
})