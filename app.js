'use strict';

const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('title', 'sonbn');
app.set('case sensitive ', true);
app.set('views', './templates');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.type('html');
	res.render('index');
});

app.get('/terms', function(req, res) {
	res.type('html');
	res.render('term-of-service');
});

app.listen(process.env.PORT || 8080);