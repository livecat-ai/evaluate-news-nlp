var path = require('path');
const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');
var FormData = require('form-data');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');

dotenv.config();
// console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

app.use(cors())

app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}));
const fetch = require("node-fetch");

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// ------- Build Text Classification URL ---------

async function getSentiment(url) {
    const meaningCloudUrl = "https://api.meaningcloud.com/sentiment-2.1";
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", url);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }

    const sentiment = await fetch(meaningCloudUrl, requestOptions)
        .then(response => {
            return response.json()
        })
        .catch(error => console.log('error', error));
    return sentiment;
}

app.post('/sentiment', async function (req, res) {
    console.log("::: In POST /sentiment :::")
    const inputUrl = req.body.url;
    // console.log(inputUrl);
    const sentiment = await getSentiment(inputUrl);
    // console.log(sentiment);
    res.send({"sentiment": sentiment.score_tag,
              "status": sentiment.status.msg});
});

