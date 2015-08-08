/* jshint node:true */
var should 	= require('should'),
	sinon 	= require('sinon');

describe('Exercise controller tests', function () {
	describe('Post', function () {
		it('should not allow an empty title on post', function () {
			var Exercise = function (exercise) {this.save = function(){};};

			var req = {
				body: {
					author: 'Alec Taylor'
				}
			};

			var res = {
				status: sinon.spy(),
				send: sinon.spy()
			};

			var exerciseController = require('../../../controllers/exerciseController')(Exercise);

			exerciseController.post(req, res);
			res.status.calledWith(400)
				.should.equal(true, 'Bad status ' + res.status.args);
			res.send.calledWith('Title is required')
				.should.equal(true);
		});
	});
});