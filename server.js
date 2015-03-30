'use strict';

var express     = require('express'),
	bodyParser    = require('body-parser'),
	mongoose      = require('mongoose'),
	MailListener  = require('mail-listener2'),
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

/* 
#####  The scheduler #####
*/

var mailListener = new MailListener({
  username: "<username>",
  password: "<password>",
  host: "<imap>",
  port: 993, // imap port
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  searchFilter: ["unseen"], // the search filter being used after an IDLE notification has been retrieved
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

mailListener.start();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments
  console.log("emailParsed", mail);
  // mail processing code goes here
});