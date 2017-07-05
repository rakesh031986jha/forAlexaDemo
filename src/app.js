var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
  console.console.log('inside come ');
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
  console.console.log('handle function colling');
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    }
};
console.log('Server running on port');
