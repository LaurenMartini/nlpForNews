var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();
const mockAPIResponse = require('./mockAPI.js');
const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    console.log('get / called');
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
    console.log('get /test called');
    res.send(mockAPIResponse)
});

app.post('/add', getSentimentAnalysis(userURL));

//helper function for fetching data
const getSentimentAnalysis = async(userURL) => {
    const res = await fetch(`${baseURL}?key=${API_KEY}&lang=en&url=${userURL}`);
    try {
        const data = await res.json();
        console.log('data: ', data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
}