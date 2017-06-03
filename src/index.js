'use strict';

import Alexa from 'alexa-sdk'

const INVOCATION_NAME = process.env.INVOCATION_NAME || "Base Node Alexa";
const APP_ID = process.env.APP_ID;

// Note: these functions can't be ES6 arrow functions; "this" ends up undefined if you do that.
const handlers = {
    'LaunchRequest': function () {
        let speechOutput = `Welcome to ${INVOCATION_NAME}`;
        this.emit(':ask', speechOutput, "What would you like to do?");
    },
    'AMAZON.HelpIntent': function () {
        let speechOutput = `Welcome to ${INVOCATION_NAME}`;
        this.emit(':ask', speechOutput, "What would you like to do?");
    },
    'AMAZON.StopIntent': function () {
        let speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        let speechOutput = "Okay";
        this.emit(':tell', speechOutput);
    }
};

exports.handler = (event, context, callback) => {
    let alexa = Alexa.handler(event, context);
    // Only set appId if not debugging
    if ('undefined' === typeof process.env.DEBUG) {
        alexa.appId = APP_ID;
    }
    alexa.registerHandlers(handlers);
    alexa.execute();
};
