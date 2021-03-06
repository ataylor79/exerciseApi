/* jshint node:true */
module.exports = function (Exercise) {
	'use strict';
	/**
	 * @api {post} /exercise Upload a new exercise
	 * @apiName Exercises
	 * @apiGroup Exercise
	 * @apiDescription
	 * 		Add an exercise to the library
	 * @apiSuccess {String} status ok
	 */
	var post = function (req, res) {
		var exercise = new Exercise(req.body);

		exercise.save(function (err) {
			if (err) { return res.status(500).send(err); }

			res.status(201).send(exercise);
		});
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

			res.json(exerciseList);
		});
	};
	var getById = function (req, res) {
		res.json(req.exercise);
	};
	var put = function (req, res) {
		req.exercise.name 			= req.body.name;
		req.exercise.description 	= req.body.description;
		req.exercise.icon 			= req.body.icon;
		req.exercise.works 			= req.body.works;

		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.json(exercise);
		});
	};
	var patch = function (req, res) {
		if (req.body._id) { delete req.body.id; }

 		for (var prop in req.body) {
 			req.exercise[prop] = req.body[prop];
 		}

 		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.json(exercise);
		});
	};
	var remove = function (req, res) {
		req.exercise.remove(function (err) {
 			if (err) {
 				res.status(500).send(err);
 			} else {
 				res.status(204).send('Exercise removed');
 			}
 		});
	};

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