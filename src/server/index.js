var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mockAPIResponse = require('./mockAPI.js');
var textapi = new meaningCloud({
    application_key: process.env.API_KEY
});

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
