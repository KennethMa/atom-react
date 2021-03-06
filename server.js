var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');
var INFO_FILE = path.join(__dirname, 'info.json');
var LIST_FILE = path.join(__dirname, 'list.json');
var ADV_FILE = path.join(__dirname, 'adv.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/comments', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
app.get('/api/info', function(req, res) {
    fs.readFile(INFO_FILE, function(err, data) {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
app.get('/api/list', function(req, res) {
    fs.readFile(LIST_FILE, function(err, data) {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});
app.get('/api/adv', function(req, res) {
    fs.readFile(ADV_FILE, function(err, data) {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.post('/api/comments', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(comments);
        });
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
