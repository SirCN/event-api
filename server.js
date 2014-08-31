var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	port = process.env.PORT || 8080,
	router = express.Router();


mongoose.connect('mongodb://localhost/events');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


router.use(function(req, res, next){
	console.log('Request from: ' + req.ip);
	next();
});

app.use('/api', router);
app.use('/api', require('./routes/event-routes.js'));

app.listen(8080);

console.log('Server running on port: ' + port);
