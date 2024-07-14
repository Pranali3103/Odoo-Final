const express = require('express');
const twilio = require('twilio');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

function sendSMS() {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    return client.messages
        .create({
            body: 'Your book issue is complete',
            from: '+12515777303',
            to: process.env.PHONE_NUMBER
        })
        .then(message => {
            console.log(message.sid, "Message sent");
        })
        .catch(err => {
            console.log(err, "Message not sent");
        });
}

sendSMS();

app.listen(5000, () => console.log('Listening on port 5000'));
