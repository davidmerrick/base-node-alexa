Lambda function which uses IBM's BlueMix to analyze tone of text. Written in NodeJS.

## Reference

* https://github.com/watson-developer-cloud/node-sdk/blob/master/examples/conversation_tone_analyzer_integration/tone_detection.js

## Features

* Includes gulp config for deployment 

## Usage:

1. Set up an IAM role or user with Lambda access using the "AWSLambdaFullAccess" policy.
2. Create a conf/lambda-config.js file with the following contents:
```javascript
module.exports = {
    accessKeyId: null, // AWS access key here
    secretAccessKey: null, // AWS secret here
    region: null, // Region here (will probably be 'us-east-1')
    handler: 'index.handler',
    functionName: null, // Lambda function name here>
    timeout: 10,
    memorySize: 128,
    publish: true, // default: false,
    runtime: 'nodejs4.3'
}
```
3. Write the code for your app.
4. Deploy your code to your Lambda function:
```
gulp deploy
```