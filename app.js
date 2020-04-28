const express = require('express');
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts');
const cors = require('cors');
const routes = require('./routes/index')
require('dotenv').config()
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// DB Connection
console.log(process.env.mongo_URI)
mongoose.connect(process.env.mongo_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const database = mongoose.connection;
database.once('open', () => {
    console.log('Connected to the database')
}).on('error', (err) => {
    console.log(err)
})


app.set('view engine', "ejs");
app.set(expressLayout);

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
