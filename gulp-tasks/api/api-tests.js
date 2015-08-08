/* jshint node: true */
var gulp 	= require('gulp'),
	mocha 	= require('gulp-mocha'),
	env			= require('gulp-env');

gulp.task('unit-tests', function () {
	'use strict';
	gulp.src('tests/unit/**/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('integration-tests', function () {
	'use strict';
	env({vars:{ENV:'test'}});
	gulp.src('tests/integration/*.js', {read: false})
		.pipe(mocha());
});