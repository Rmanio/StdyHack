const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/index.html'));
});

app.get('/education',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/education.html'));
});

app.get('/timer',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/Timer.html'));
});

app.get('/calculato',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/MathCalculator.html'));
});

app.get('/materials',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/Materials.html'));
});

app.get('/news',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/index1.html'));
});

app.get('/schedule',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/Event%20Timer.html'));
});

app.get('/register',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/iudex.html'));
});

app.get('/profile',function(req,res) {
    res.sendfile(path.join(__dirname + '/public/view/profilepage.html'));
});

app.listen(process.env.PORT || 3000);

console.log('Running at http://localhost:3000');