'use strict'

exports.ping = function(req, res){
	res.send({ status: 'ok'});
};

exports.status = function(req, res){
	res.send({ message: 'Not implemented!'});
};
