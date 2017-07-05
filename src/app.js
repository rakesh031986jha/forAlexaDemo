'use strict';

var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    console.log('inside come ');

    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    LaunchRequest: function () {
        console.log('LaunchRequest');
        this.emit('SayHello');
    },
    HelloWorldIntent: function () {
        console.log('HelloWorldIntent');
        this.emit('SayHello')
    },
    SayHello: function () {
        console.log('SayHello');
        this.emit(':tell', 'Hello World!');
    }
};
console.log('Server running on port');
