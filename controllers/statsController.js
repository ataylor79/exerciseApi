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


	return {
		post: post,
		get: get
	};
};
