
import { json } from "body-parser"
import fetch from "node-fetch"
// import { checkUrl } from './js/urlChecker'

function humanify(result) {
  const options = {
    "P+": "Strong Positive",
    "P": "Positive",
    "NEU": "Neutral",
    "N": "Negative",
    "N+": "Strong Negative",
    "NONE": "Without Polarity"
  };
  return options[result];
}

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const inputUrl = document.getElementById('text').value;
    if (Client.checkUrl(inputUrl)) {
      console.log("::: Form Submitted :::")
      await postData('http://localhost:8081/sentiment', {"url": inputUrl})
      .then(data => {
        console.log(data.status);
        console.log(data.sentiment);
        document.getElementById('results').innerHTML = humanify(data.sentiment);
      });
    }
    else {
      alert("Ivalid URL! - Please try again");
    }
};



// Async POST
async function postData( url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
      });
    // console.log("==Before try block of postData==")

    try {
      // console.log("==In try block of postData==");
      const newData = await response.json();
      // console.log(newData)
      return newData;
    }catch(error) {
        console.log("error", error);
    }
};

export { 
  handleSubmit,
  humanify
 };
