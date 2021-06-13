var path = require('path');
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const dotenv = require('dotenv');
var FormData = require('form-data');
const mockAPIResponse = require('./mockAPI.js');


dotenv.config();
// console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// function buildURL(text) {
//     const apiKey = process.env.API_KEY;
//     const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}`;
//     const userInput = `&of=json&txt=${text}`;
//     const language = '&lang=en';
//     return baseURL + userInput + language;
// };

// ------- Build Text Classification URL ---------

const inputUrl = "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"

const textClassificationUrl = "https://api.meaningcloud.com/class-2.0"

const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("url", inputUrl);
formdata.append("model", "IPTC_en");

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
}

// const classified = fetch(textClassificationUrl, requestOptions)
//     .then(response => {
//         return response.json()
//     })
//     .catch(error => console.log('error', error));



// const sendData = async (result) => {
//     classified.then((data) => {
//         result.send(data);
//         })
//     };

    
// app.get('/test', function (req, res) {
//     sendData(res);
//     // sendData(res);

// });

app.post('/test', function (req, res) {
    // res.send('POST received');
    console.log(req.body);

});

