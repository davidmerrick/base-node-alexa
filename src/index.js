import alexa from "alexa-app";

const APP_NAME = "Base-Node-Alexa";
var app = new alexa.app(APP_NAME);

app.launch((request, response) => {
    let speechOutput = "Welcome";
    response.say(speechOutput);
});

app.intent("AMAZON.HelpIntent",{}, (request, response) => {
    let speechOutput = "Help";
    response.say(speechOutput);
});

app.intent("AMAZON.StopIntent",{}, (request, response) => {
    let speechOutput = "Goodbye";
    response.say(speechOutput);
});

app.intent("AMAZON.CancelIntent",{}, (request, response) => {
    let speechOutput = "Okay";
    response.say(speechOutput);
});

exports.handler = app.lambda();