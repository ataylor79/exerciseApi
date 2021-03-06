/*jshint node:true*/
'use strict';

var http 		= require('http'),
	express 	= require('express'),
	mongoose 	= require('mongoose'),
	bodyParser 	= require('body-parser'),
	fs 			= require('fs'),
	path 		= require('path'),
	morgan 		= require('morgan'),
	config 		= require('./apiConfig.json'),
	app 		= express(),
	router 		= express.Router(),
	accessLogStream,
	server;

mongoose.connect('mongodb://' + config.mongoDBServer + ':' + config.mongoDBPort + '/' + config.mongoDBName);

app.set('port', process.env.PORT || config.defaultPort);

// use body parser to extract params from the req body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Access logging - oh yeahhh
// create a write stream (in append mode)
accessLogStream = fs.createWriteStream(config.accessLogFile, {flags: 'a'});

// setup the logger
app.use(morgan('combined', {
	skip: function (req) { return req.get('host') === 'localhost:' + app.get('port'); },
	stream: accessLogStream
}));

// add router files
fs.readdir(config.routerDir, function(err, files){
	if(err) { throw err; }

	files.forEach(function(file){
		require(config.routerDir + '/' + path.basename(file, '.js'))(router);
	});
 });

// register routes
//app.use('/apiDoc', express.static(__dirname + '/apiDoc'));
app.use('/api', router);

// start up server
server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
