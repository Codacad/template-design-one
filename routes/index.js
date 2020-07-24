const express = require('express');
const Router = express.Router();
const Messages = require('../models/messages');

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

Router.get('/api/message', (req, res) => {
    Messages.find({}, function(err, messages){
        if(err){
            return err
        }
        res.json(messages);
    })
})
Router.post('/message', (req, res) => {
    const {name, email, text} = req.body;
    const message = {
        name, 
        email, 
        text
    }            
    console.log(message)
    const newMessage = new Messages(message);
    newMessage.save().then(msg => {
        res.json(msg);
    }).catch(err => console.log(err));
})
module.exports =  Router;