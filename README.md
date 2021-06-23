# Website Sentiment Analysis

This is a prototype website sentiment analysis app that alows a user to enter a web address and get feedback on the possitivity of the content.

For example a feel good new story might return "possitive" and a story on corruption might return "negative".

## Get up an running

First make sure node is installed on your system.
Download the code from github: https://github.com/livecat-ai/evaluate-news-nlp.git

cd to the main project folder and type
npm i
npm run build-prod
npm start

Then, in a browser, navigate to http://localhost:8081/

A page will then be displayed where you can enter a website URL into the text box.
Click submit and await the response.

Invalid URLs with be notified by an alert.
