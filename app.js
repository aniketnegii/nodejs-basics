const express = require('express');
const ejs = require('ejs');

//creating express object
const app = express();

//register view engine
app.set('views', './views');
app.set('view engine', 'ejs');
//diff view folder
//app.set('views', 'myviews');

//listening to port 3000
app.listen(3000);

app.get('/', (req, res) => {
    
    //res.send('<p>Hello my friends</p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title: 'HOME'});
});

app.get('/about', (req, res) => {

    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create new blog'});
})

//error page
app.use( (req, res) => {
    //res.status(400).sendFile('./views/404.html', {root: __dirname});
    res.render('404', {title: '404'});
})