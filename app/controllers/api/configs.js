'use strict'

exports.types = function(req, res){
	res.send({ supported: ['email']});
};