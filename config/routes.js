'use strict'
var app = module.parent.exports.app;

var eventsAPIController = require('../app/controllers/api/events'),
	configAPIController = require('../app/controllers/api/configs'),
	healthAPIController = require('../app/controllers/api/health');

// events
app.get('/api/events', eventsAPIController.events);
app.get('/api/events/:id', eventsAPIController.get_event);
app.put('/api/events/:id', eventsAPIController.edit_event);
app.post('/api/events/', eventsAPIController.create_event);

// config
app.get('/api/config/types', configAPIController.types)

// health check
app.get('/api/health/ping', healthAPIController.ping)
app.get('/api/health/status', healthAPIController.status)
