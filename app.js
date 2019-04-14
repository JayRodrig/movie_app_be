// NPM DEPENDECIES 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// FUNCTION RETURNING EXPRESS APP SERVER
const getApp = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    return app;
}

module.exports = {
    getApp,
}