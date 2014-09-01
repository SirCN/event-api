'use strict'
var app = module.parent.exports.app;

var eventsAPIController = require('../app/controllers/api/events');

// events
app.get('/api/events', eventsAPIController.events);
app.get('/api/events/:id', eventsAPIController.get_event);
app.put('/api/events/:id', eventsAPIController.edit_event);
app.post('/api/events/', eventsAPIController.create_event);