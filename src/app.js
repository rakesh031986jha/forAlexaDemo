'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response )
	response.say( 'Welcome to your test skill' ).
  reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
}
console.log('lunch');
 );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[
		"say the number {1-10|number}",
		"give me the number {1-10|number}",
		"tell me the number {1-10|number}",
		"I want to hear you say the number {1-10|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say("You asked for the number "+number);
  }
  console.log('lunch');
);

module.exports = app;
