const translate = require('@vitalets/google-translate-api');

async function tr(text) {
    return translate(text, {to: 'en'}).catch(err => {
        console.error(err);
    }).text;
    
}

export default tr