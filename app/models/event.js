var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var EventSchema = new Schema({
	testCase: 		String,
	eventType: 		String,
	eventData: 		String,
	eventDate: 		{ type: Date, default: Date.now},
	eventExpire: 	Date
});

module.exports = mongoose.model('Events', EventSchema);