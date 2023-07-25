const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('mongodb+srv://Jidnyesh:jidnyesh%402@cluster0.jqx0dup.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

const quoteRouter = require('./routes/quote');
app.use('/quote', quoteRouter);

app.use('/', (req, res) => {
  res.send('Hello World');
});

const port = 5050;
app.listen(port, () => console.log(`Server started at port ${port}`));
