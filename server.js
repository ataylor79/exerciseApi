/*jshint node:true*/
'use strict';

var express 		= require('express'),
	mongoose 			= require('mongoose'),
	bodyParser 		= require('body-parser'),
	fs 						= require('fs'),
	path 					= require('path'),
	morgan 				= require('morgan'),
	app 					= express(),
	router 				= express.Router(),
	config				= require('./apiconfig.json'),
	env 					= process.env.NODE_ENV || 'dev',
	isDev 				= (env === 'dev') ? true : false,
	accessLogStream;

var db = (isDev) ? config.dev.mongoDB : config.test.mongoDB;

console.log('mongodb://' + db.user + ':'  + db.password + '@' + db.server + ':' + db.port +  '/' + db.name);

mongoose.connect('mongodb://' + db.user + ':'  + db.password + '@' + db.server + ':' + db.port +  '/' + db.name);

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

app.set('port', process.env.PORT || config.defaultPort);

// use body parser to extract params from the req body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// if (!isDev) {

// 	//Access logging - oh yeahhh
// 	//create a write stream (in append mode)
// 	accessLogStream = fs.createWriteStream(config.accessLogFile, {flags: 'a'});

// 	// setup the logger
// 	app.use(morgan('combined', {
// 		skip: function (req) { return req.get('host') === 'localhost:' + app.get('port'); },
// 		stream: accessLogStream
// 	}));

// }

// add router files
fs.readdir(config.routerDir, function(err, files){
	if(err) { throw err; }

	files.forEach(function(file){
		require(config.routerDir + '/' + path.basename(file, '.js'))(router);
	});
 });

if (isDev) {
	app.all('/*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	  next();
	});
}


// register routes
app.use('/apiDoc', express.static(__dirname + '/apiDoc'));
app.use('/api', router);


// start up server
app.listen(app.get('port'), function(){
  console.log('Express server(' + env + ') listening on port ' + app.get('port'));
});

module.exports = app;
