'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Mars Oribter Mission Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a mars orbiter mission fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
  "Mars Orbiter Mission became India’s first interplanetary mission to the planet mars. Mars Orbiter Mission also called Mangalyaan."
  "The Mars Orbiter Mission, also called Mangalyaan is a space probe orbiting Mars since 24 September 2014."
  "Mangalyaan translates to Mars craft in Sanskrit."
  "The total cost of the mission was approximately $73 million, making it the least-expensive Mars mission to date."
  "India became first country in all over the world to insert a spacecraft into the Martian orbit in its first attempt."
  "The Mars Orbiter Mission developed and deployed in just 15 months."
  "Only 4 countries have been successful in their Martian Missions."
  "The Mars Orbiter Mission will also help to search Mars for Methane which is a key chemical in life on the Earth."
  "India also became Asia’s first country with the spacecraft in the red planet’s orbit."
  "Only 21 missions to Mars have been successful out of 51 missions by different countries."
  "It takes 14 minutes for a signal from Earth to reach Mars!"
  "The Mars mission is helping Indian kids become more interested in Space Science."
  "The Mars Orbiter Mission is meant to test India's ability to place a craft in Martian orbit and technologies required for a future interplanetary mission."
  "Five solar-powered instruments aboard Mangalyaan will gather data to help determine how Martian weather systems work and what happened to the water that is believed to have once existed on the planet in large quantities."
  "After completing the 666 million km journey in more than 10 months, the spacecraft has been studying the red planet's surface and scanning its atmosphere."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
