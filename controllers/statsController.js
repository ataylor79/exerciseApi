/* jshint node:true */
module.exports = function (Stats) {
	'use strict';
	/**
	 * @api {post} /api/user/{UserId}/stats Save a users stats
	 * @apiName Add stats per user id
	 * @apiGroup Stats
	 * @apiDescription
	 * 		Add a set of stats
	 * @apiSuccess {String} status 201
	 */
	var post = function (req, res) {
		var stats = new Stats(req.body);

		stats.userID = req.params._id;

		stats.save(function (err, result) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(result);
		});

	};
	/**
	 * @api {get} /api/user/{UserId}/stats Get list of user stats
	 * @apiName Get a list of user stats
	 * @apiGroup Stats
	 * @apiDescription
	 * 		Get list of stored users stats
	 * @apiSuccess {Object} list of users stats
	 */
	var get = function (req, res) {

		Stats.find({userID: req.params._id}, function (err, list) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(list);
		});
	};
	/**
	 * @api {put} /api/user/{UserId} Overwrite user record
	 * @apiName Overwrite a user
	 * @apiGroup Users
	 * @apiParam {Number} id user unique ID.
	 * @apiSuccess {String} status 201
	 */
	var put = function (req, res) {

		User.update({'_id':req.result._id}, req.body, {multi: false}, function (err, result) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(result);
		});
	};
	/**
	 * @api {patch} /api/user/{UserID} Overwrite fields in record
	 * @apiName update a user
	 * @apiGroup Users
	 * @apiDescription
	 * 		Overwrite fields in record
	 * @apiSuccess {String} status 201
	 */
	var patch = function (req, res) {

		var user = req.result;

		if (req.body._id) { delete req.body.id; }

 		for (var prop in req.body) {
 			user[prop] = req.body[prop];
 		}

 		user.save(function (err, result) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(result);
		});
	};

	/**
	 * @api {delete} /api/user/{userId} remove record
	 * @apiName delete a user
	 * @apiGroup Users
	 * @apiParam {Number} id user unique ID.
	 * @apiDescription
	 * 		delete existing record
	 * @apiSuccess {String} status 204
	 */
	var remove = function (req, res) {

		var user = req.result;

		user.remove(function (err) {
 			if (err) {
 				res.status(500).send(err);
 			} else {
 				res.status(200);
 				res.json({status : 'User removed'});
 			}
 		});
	};

	var getById = function (req, res) {
		res.json(req.result);
	};

	return {
		post: post,
		get: get
	};
};
