module.exports = function(){
	var express = require('express'),
		Events = require('.././app/models/events'),
		router = express.Router();
		
	router.route('/events')
	.post(function(req, res){
		var testEvent = new Events();
		testEvent.eventType 	= req.body.eventType; 
		testEvent.eventData 	= req.body.eventData;
		testEvent.eventDate 	= req.body.eventDate;
		testEvent.eventExpire 	= req.body.eventExpire;
		testEvent.testCase 		= req.body.testCase;

		testEvent.save(function(err){
			if(err)
				res.send(err)
			res.json({event: testEvent})
		});
	})
	.get(function(req, res){
		Events.find(function(err, events){
			if(err)
				res.send(err)
			res.json(events);
		})
	});

	return router;
}();