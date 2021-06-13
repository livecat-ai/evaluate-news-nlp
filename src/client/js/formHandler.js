

// function buildURL(text) {
//     const apiKey = process.env.API_KEY;
//     const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}`;
//     const userInput = `&of=json&txt=${text}`;
//     const language = 'lang=en';
//     return baseURL + userInput + language;
// }

import { json } from "body-parser"
import fetch from "node-fetch"
// import { handleSubmit } from ".."



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



async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formText = document.getElementById('text').value;
    // const formText = "testUrl"
    console.log(formText);
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    postData('http://localhost:8081/test', {inputUrl: formText});

//     await fetch('http://localhost:8081/test', {
//         method: 'GET',
//         credentials: 'same-origin',
//         headers: {'content-type': 'application/json',},
//     })
//     .then(res => res.json())
//     .then(function(res) {
//         console.log(res);
//         console.log(document.getElementById('results').innerHTML);
//         const resultsText = res.category_list[0].label;
//         document.getElementById('results').innerHTML = resultsText;
//     })
}



// Async POST
async function postData( url = '', data = {}) {
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({url: 'http://test'}), // body data type must match "Content-Type" header        
    })

    try {
      const newData = await response.json();
      console.log(newData)
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
// const retrieveData = async (url='') =>{ 
//     const request = await fetch(url);
//     try {
//     // Transform into JSON
//     const allData = await request.json()
//     }
//     catch(error) {
//       console.log("error", error);
//       // appropriately handle the error
//     }
//   };

// async function handleSubmit(event) {
//     event.preventDefault();
//     baseUrl = 'http://localhost:8081/test'
//     let formText = document.getElementById('text').value;
//     const response = postData(baseUrl, { text: formText})

//     try {
//         const newData = await response.json()
//         console.log(newData)
//         // document.getElementById("results").innerHTML = newData;
//     }
//     catch {
//         console.log("Error", error);
//     }
// }
export { handleSubmit };
