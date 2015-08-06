/**

* Starter Template

* Plugins

* gulp 					- gulp tool
* gulp-load-plugins 	- looks at package.json and includes all dependencies instead of requiring them all individually

//js
* gulp-jshint 			- js error checking

//utilities
* gulp-size 			- shows size of files
* gulp-exec 			- used to execute commands on the command line

//non gulp
* jshint-stylish 		- formats the output of jshint to make it pretty
* lodash 				- JS Utils
**/

'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp-tasks', { recurse: true });