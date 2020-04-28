const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('I am ready to go')
})

module.exports =  Router;