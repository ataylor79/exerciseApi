/* jshint node:true */
var gulp 	= require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('runApp', function () {
	'use strict';
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {
			NODE_ENV: 'development',
			port: 8000
		},
		ignore: ['node_modules']
	}).
	on('restart', function () {
		console.log('restarting api');
	});
});

