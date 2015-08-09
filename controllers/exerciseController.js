/* jshint node:true */
module.exports = function (Exercise) {
	'use strict';
	/**
	 * @api {post} /exercise Upload a new exercise
	 * @apiName Exercises
	 * @apiGroup Exercise
	 * @apiDescription
	 * 		Add an exercise to the library
	 * @apiSuccess {String} status 201
	 */
	var post = function (req, res) {
		var exercise = new Exercise(req.body);

		if (!req.body.title) {
			res.status(400);
			res.send('Title is required');
		} else {
			exercise.save();
			res.status(201);
			res.send(exercise);
		}

		
	};
	/**
	 * @api {get} /exercise Get list of exercises
	 * @apiName Exercises
	 * @apiGroup Exercises
	 * @apiDescription
	 * 		Get list of stored exercises
	 * @apiSuccess {Object} list of exercise
	 */
	var get = function (req, res) {

		var query = {};

		if (req.query.name) {
			query.name = req.query.name;
		}

		Exercise.find(query, function (err, exerciseList) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(exerciseList);
		});
	};
	
	var getById = function (req, res) {
		res.json(req.exercise);
	};

	/**
	 * @api {put} /exercise Overwrite complete existing exercise
	 * @apiName Exercises
	 * @apiGroup Exercise
	 * @apiDescription
	 * 		Overwrite complete record
	 * @apiSuccess {String} status 201
	 */
	var put = function (req, res) {
		req.exercise.title 			= req.body.title;
		req.exercise.description 	= req.body.description;
		req.exercise.icon 			= req.body.icon;
		req.exercise.works 			= req.body.works;

		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(exercise);
		});
	};
	/**
	 * @api {patch} /exercise Overwrite fields in record
	 * @apiName Exercises
	 * @apiGroup Exercise
	 * @apiDescription
	 * 		Overwrite fields in record
	 * @apiSuccess {String} status 201
	 */
	var patch = function (req, res) {
		if (req.body._id) { delete req.body.id; }

 		for (var prop in req.body) {
 			req.exercise[prop] = req.body[prop];
 		}

 		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(exercise);
		});
	};

	/**
	 * @api {delete} /exercise remove record
	 * @apiName Exercises
	 * @apiGroup Exercise
	 * @apiDescription
	 * 		delete existing record
	 * @apiSuccess {String} status 204
	 */
	var remove = function (req, res) {
		req.exercise.remove(function (err) {
 			if (err) {
 				res.status(500).send(err);
 			} else {
 				res.status(204).send('Exercise removed');
 			}
 		});
	};

	/*
		Middleware function for put, patch and remove
	 */
	var findById = function (req, res, next) {
		Exercise.findById(req.params.exerciseId, function (err, exercise) {
 			if (err) { 
 				res.status(500).send(err); 
 			} else if (exercise) {
 				req.exercise = exercise;
 				next();
 			} else {
 				res.status(404).send('Exercise not found');
 			}
 		});
	};

	return {
		post: post,
		get: get,
		getById: getById,
		put: put,
		patch: patch,
		remove: remove,
		findById: findById
	};
};