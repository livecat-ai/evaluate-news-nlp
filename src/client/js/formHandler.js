

// function buildURL(text) {
//     const apiKey = process.env.API_KEY;
//     const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}`;
//     const userInput = `&of=json&txt=${text}`;
//     const language = 'lang=en';
//     return baseURL + userInput + language;
// }

import { json } from "body-parser"
import fetch from "node-fetch"

// let text = "Some text"
// let textApiUrl = buildURL(text);


// function handleSubmit(event) {
//     event.preventDefault()

    

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value

//     let text = "Some text"
//     let textApiUrl = buildURL(formText);
//     // checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch(textApiUrl)
//     .then(res => res.json())
//     .then(function(res) {
//         console.log(res);
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.message
    })
}

// const handleSubmit = async(event) => {
//     url = 'http://localhost:8081/test'
//     let formText = document.getElementById('text').nodeValue;
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {'content-type': 'application/json',},
//         body: json.stringify(formText),
//     });

//     try {
//         const newData = await response.json()
//         document.getElementById("results").innerHTML = newData;
//     }
//     catch {
//         console.log("Error", error);
//     }
// }

export { handleSubmit }
