const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index', {
        title:"CodAcad",
        AuthUser:req.user
    });
})


Router.get('/blog', (req, res) => {
    res.render('blog',{title:"Blog", AuthUser:req.user});
})
Router.get('/courses',(req, res) => {
    res.render('courses', {title:"Courses", AuthUser:req.user});
})

Router.get('/resume',(req, res) => {
    res.render('resume', {title:"Resume", AuthUser:req.user});
})

Router.get('/singlepageapp', (req, res) => {
    res.render('singlepageapp', {title:"Single Page App", AuthUser:req.user});
})

module.exports =  Router;