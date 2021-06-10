var path = require('path');
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js');


dotenv.config();
// console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

app.use(cors())

console.log(__dirname)

function buildURL(text) {
    const apiKey = process.env.API_KEY;
    const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}`;
    const userInput = `&of=json&txt=${text}`;
    const language = '&lang=en';
    return baseURL + userInput + language;
};


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


let text = "At this week's Full Council Annual General Meeting (Tuesday, 18 May), a new Ealing Council leadership and cabinet was announced. Councillor Peter Mason was elected as Leader of Ealing Council, and one of the first things he did was to announce his new cabinet:"
let textApiUrl = buildURL(text);

const sentiment = fetch(textApiUrl)
.then(response => response.json())
.then(function(meaning) {
    return meaning;
});

const sendData = async (result) => {
    sentiment.then((data) => {
        result.send(data);
        })
    };

app.get('/test', function (req, res) {
    sendData(res);
});

// const sentiment = fetch(textApiUrl)
//     .then(response => response.json())
//     .then(function(meaning) {
//         return meaning;
//     });

// const sendData = async (url, response) => {
//     const data = await sentiment;
//     response.send(data);
// }
// app.get('/test', function (req, res) {
//     console.log(`Your API key is ${process.env.API_KEY}`);
//     let text = "At this week's Full Council Annual General Meeting (Tuesday, 18 May), a new Ealing Council leadership and cabinet was announced. Councillor Peter Mason was elected as Leader of Ealing Council, and one of the first things he did was to announce his new cabinet:"
//     let textApiUrl = buildURL(text);
//     console.log(textApiUrl);

//     const sentiment = fetch(textApiUrl)
//         .then(response => response.json())
//         .then(function(meaning) {
//             return meaning;
//     });

//     const sendData = async (result) => {
//         let textApiUrl = buildURL(text);
//         sentiment.then((data) => {
//             result.send(data);
//         })
//     };
//     // fetch(textApiUrl)
//     // .then(response => response.json())
//     // .then(function(meaning) {
//     //     console.log(meaning);
//     //     // res.send(meaning);
//     //     res.json("Some dummy text");
//     // })
//     // res.send(mockAPIResponse)
    
//     sendData(res);
// })
