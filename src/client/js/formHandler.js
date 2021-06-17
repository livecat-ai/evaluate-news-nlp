
import { json } from "body-parser"
import fetch from "node-fetch"

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formText = document.getElementById('text').value;
    // const formText = "testUrl"
    // console.log(formText);
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    // postGet(formText);
    // const newData = await retrieveData('http://localhost:8081/sentiment')
    // .then(function(data) {
    //     return data.body;
    // });
    const newData = await postGet("http://Test.com");
    // console.log(newData);
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
    })
    console.log("==Before try block of postData==")

    try {
      console.log("==In try block of postData==");
      const newData = await response.json();
      console.log(newData)
      return newData;
    }catch(error) {
        console.log("error", error);
    }
};


// Async GET
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
      // Transform into JSON
      const allData = await request.json()
      console.log(allData);
    }
    catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
  }

async function postGet(inputUrl) {
    console.log("==In postGet==");
    postData('http://localhost:8081/input', {url: inputUrl})
    .then(response => {
        retrieveData('http://localhost:8081/sentiment');
    })
};



export { handleSubmit };
