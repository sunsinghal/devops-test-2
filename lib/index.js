const express = require('express');
const handler = require('./handler');
const childprocess = require('child_process');
var app = express();

app.get('/healthcheck', function (req, res) {
    childprocess.exec('git rev-parse HEAD', (err, data) => {
        const { statusCode, responseMessage } = handler(err, data);
        res.status(statusCode).json(responseMessage);
    });
});

module.exports = app;
