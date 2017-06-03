var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version_date: process.env.VERSION_DATE || "2016-05-19"
});

// Parameters for the call are defined in the tone.json file.
var params = {
    text: "Crooked Hillary Clinton now blames everybody but herself, refuses to say she was a terrible candidate. Hits Facebook & even Dems & DNC."
};

tone_analyzer.tone(params, (error, response) => {
        if (error) {
            return console.error(`ERROR: ${error}`);
        }

        let documentTone = response.document_tone;
        let tones = documentTone.tone_categories[0].tones;
        let sorted = tones.sort((a,b) => b.score - a.score)
        let foundTone = sorted[0];
        let toneName = foundTone.tone_name;
        let toneScore = foundTone.score;
        let output = {
            name: toneName,
            score: toneScore
        };
        console.log(output);
    }
);