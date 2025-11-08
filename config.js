const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FNxGVayT#lY_pHOu26tR0nt1Z3nEKu0KNPpmOI95_Qpf-H5FcWPM'
};
