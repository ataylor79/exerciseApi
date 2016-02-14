/* jshint node:true */
module.exports = function (Model) {
	'use strict';

	var findById = function (req, res, next) {
		Model.findById(req.params._id, function (err, result) {
 			if (err) {
 				res.status(500).send(err);
 			} else if (result) {
 				req.result = result;
 				next();
 			} else {
 				res.status(404).send({status: 'Record not found'});
 			}
 		});
	};

	return {
		findById : findById
	};
};
