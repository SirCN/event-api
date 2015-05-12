var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var EventSchema = new Schema({
	scenario: 		    String,
	status: 		    String,
    interval:           {type: String, default: ''},
    expire:             Date,
    type:               String,
    emailData:          {
        from:           String,
        to:             String,
        cc:             String,
        subject:        String,
        sendDate:       Date,
        receivedDate:   Date
    }
});

module.exports = mongoose.model('Events', EventSchema);