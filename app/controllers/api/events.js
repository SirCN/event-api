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
    var eventObject = {
        scenario: 		req.body.scenario,
        status: 		req.body.status,
        expire:         req.body.expire,
        type:           req.body.type,
        emailData:      {
            emailData: Object
        }
    };

    if(typeof req.body.interval != 'undefined'){
        eventObject.interval = req.body.interval;
    }

    if(typeof req.body.emailData != 'undefined'){
        eventObject.emailData.to = req.body.emailData.to;
        eventObject.emailData.from = req.body.emailData.from;
        eventObject.emailData.cc = req.body.emailData.cc || '';
        eventObject.emailData.subject = req.body.emailData.subject;
        eventObject.emailData.sendDate = req.body.emailData.sendDate;
        eventObject.emailData.receivedDate = req.body.emailData.receivedDate;
    }

	var newEvent = Event(eventObject);

	newEvent.save(function(err){
		if(err)
			res.send(err);
		res.send(newEvent);
	})
};

exports.edit_event = function(req, res){
	res.send({ message: 'not implemented'});
}
