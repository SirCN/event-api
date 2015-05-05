'use strict';

var express     = require('express'),
	bodyParser    = require('body-parser'),
	mongoose      = require('mongoose'),
	app           = express(),
	router        = express.Router();

mongoose.connect('mongodb://localhost/events');

app.set('port', process.env.PORT || 8080 )

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// middleware - might need logging
router.use(function(req, res, next){
	console.log('Request from: ' + req.ip);
	next();
});

app.listen(app.get('port'));
console.log('Server running on port: ' + app.get('port'));

module.exports.app = app;
require('./config/routes');