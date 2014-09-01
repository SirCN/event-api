'use strict'
var Event = require('../../models/event');

exports.events = function(req, res){
	return Event.find(function(err, events){
		if(err)
			console.log(err);
		res.send(events);
	});
};

exports.get_event = function(req, res){
	return Event.find(req.params.id, function(err, event){
		if(err)
			res.send(err);
		res.send(event);
	})

};

exports.create_event = function(req, res){
	var newEvent = Event({
		testCase:  req.body.testCase,
		eventType: req.body.type,
		eventData: req.body.data,
		eventDate: req.body.date,
		eventExpire: req.body.expire, 
	});

	newEvent.save(function(err){
		if(err)
			res.send(err);
		res.send(newEvent);
	})
};

exports.edit_event = function(req, res){
	res.send({ message: 'not implemented'});
}
