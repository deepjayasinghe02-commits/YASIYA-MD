const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JM4XTRBT#keBe6tLPmt2Dtn4Oc6D6V0svBT2j-2V8HTQDFRpxbLM'
};
