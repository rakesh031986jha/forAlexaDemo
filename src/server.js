'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer(
	console.log('server ruing our not');
	httpsEnabled: false,
	port: process.env.PORT || 8000
} );

server.start();
