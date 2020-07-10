const express = require('express');
const Router = express.Router();
const Articles = require('../models/articles')
const Comments = require('../models/comments')
const Replies = require('../models/replies')

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
// Router.get('/blog/articles', (req, res) => {
//     Articles.find({})
//         .then(article => {
//             res.send(article);
//         })
//         .catch(err =>  console.log(err));
// })
// Router.post('/blog/articles', (req, res) => {        
//     const newArticle = new Articles(req.body);    
//     newArticle.save()
//         .then(() => res.send("Article Saved"))
//         .catch(err => console.log(err));
// })
// Router.get('/blog/articles/:id', (req, res) => {    
//     Articles.find({_id:req.params.id})
//         .then(article => {
//             res.send(article)
//         })
//         .catch(err => console.log(err));
//     // const newComment = new Comments(req.body);
//     // newComment.save()
//     // .then(() => res.send("Comment Saved"))
//     // .catch(err => console.log(err));
// })
// Router.post('/blog/articles/:id', (req, res) => {    
//     const newComment = new Comments(req.body);
//     console.log(Articles.comments)
//     newComment.save()
//     .then(() => res.send("Comment Saved"))
//     .catch(err => console.log(err));
// })

// Router.get('/blog/comments', (req, res) => {    
//     Comments.find({})
//         .then(comment => {
//             res.send(comment)
//         }).catch(err => console.log(err))
// })
module.exports =  Router;