const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Blog = require('./models/blog');
const { result } = require('lodash');

//creating express object
const app = express();

//connect to mongo db
const dbURI = 'mongodb+srv://test1:testing123@cluster0.qi766.mongodb.net/node-blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then( (result)=> 
        //listening to port 3000
        app.listen(3000)
    )
    .catch( (err)=> console.log(err) )

//register view engine
app.set('views', './views');
app.set('view engine', 'ejs');
//diff view folder
//app.set('views', 'myviews');

//*****************************************************************//
//mongoDB basics
// app.get('/add-blog', (req, res)=> {
//     const blog = new Blog({
//         title: "My second mongoDb",
//         snippet: "EASY",
//         body: "Hey it working amazingly"
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch( (err)=> {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req,res)=> {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err)=> {
//             console.log(err)
//         })
// })

// app.get('/single-blog', (req, res)=> {
//     Blog.findById('614489a6fb840e264eddfce4')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })
//*************************************************************************//

//middleware for static files
app.use(express.static('public'))

// app.use(morgan('dev'));

// app.use( (req, res) => {
//its a middle ware
// })

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {

    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

//blog routes
app.get('/blogs', (req,res)=> {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch( (err)=> {
            console.log(err)
        })
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create new blog'});
})

//error page
app.use( (req, res) => {
    //res.status(400).sendFile('./views/404.html', {root: __dirname});
    res.render('404', {title: '404'});
})