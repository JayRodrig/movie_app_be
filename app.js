// NPM DEPENDECIES 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// LOCAL DEPENDENCIES
const {MovieRouter,} = require('./routes/movies');


// FUNCTION RETURNING EXPRESS APP SERVER
const getApp = () => {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/movie', MovieRouter());

    return app;
}

module.exports = {
    getApp,
}