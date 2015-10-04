/*jshint node:true*/
'use strict';

module.exports = function (router) {

	var Exercise = require('../models/exerciseModel');
	var exerciseController = require('../controllers/exerciseController')(Exercise);
	var exerciseMiddleware = require('../middleware/commonMiddleware')(Exercise);
	
	router.route('/exercise')
		.post(exerciseController.post)
		.get(exerciseController.get);

	router.use('/exercise/:recordId', exerciseMiddleware.findById);

	router.route('/exercise/:recordId')
	 	.get(exerciseController.getById)
	 	.put(exerciseController.put)
	 	.patch(exerciseController.patch)
	 	.delete(exerciseController.remove);
};