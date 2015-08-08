/*jshint node:true*/
'use strict';

module.exports = function (router) {

	var PerfLog = require('../models/perfLogModel');


	router.route('/perflog')
		/**
    	 * @api {post} /preflog Upload performance log entry
    	 * @apiName AddPerformanceLog
    	 * @apiGroup Performance Log
    	 * @apiDescription
    	 * 		Add ySlow performance log
    	 * @apiSuccess {String} msg success message
    	 */
		.post(function (req, res) {

			var perfLog = new PerfLog(req.body);

			perfLog.save(function (err) {
				if (err) { return res.send(err); }

				res.json({ msg: 'Performance log saved' });
			});

		})

		.get(function (req, res) {

			PerfLog.find(function (err, perfLogs) {
				if (err) { res.send(err); }

				res.json(perfLogs);
			});

		});

	router.route('/perfLog/:categoryName')
		/**
		 * @api {get} /perfLog/:categoryName Get filtered performance log
		 * @apiName GetFilteredPerformanceLog
    	 * @apiGroup Performance Log
    	 * @apiDescription
    	 * 		Get performance log filtered by category name
    	 * @apiSuccess {Object} categoryName logs data
		 */
		.get(function (req, res) {
			var categoryArray = [];
			PerfLog.find(function (err, perfLogs) {
				if (err) { res.send(err); }

				categoryArray = perfLogs.map(function (log) {
					return { category: log[req.params.categoryName], date: log.date };
				});

				res.json(categoryArray);
			});
		});
};