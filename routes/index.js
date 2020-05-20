const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index');
})
Router.get('/blog', (req, res) => {
    res.render('blog');
})
Router.get('/courses',(req, res) => {
    res.render('courses');
})
Router.get('/contact',(req, res) => {
    res.render('contact');
})

Router.get('/about',(req, res) => {
    res.render('about');
})

module.exports =  Router;