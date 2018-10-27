const Alexa = require("ask-sdk");

const GetFactHandler = {
  canHandle (handlerInput) {
    const intentName = "GetFactIntent";

    return handlerInput.requestEnvelope.request.type === "IntentRequest"
      && handlerInput.requestEnvelope.request.intent.name === intentName;
  },
  handle (handlerInput) {
    return handlerInput.responseBuilder
      .speak("Neil Armstrong était le premier homme sur la lune.")
      .reprompt("Eh?")
      .getResponse();
  }
};

exports.handler = Alexa.SkillBuilders.custom()
                    .addRequestHandlers(
                      GetFactHandler
                    )
                    .lambda();

