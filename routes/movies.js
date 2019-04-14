const express = require('express');
const MovieServices = require('../services/movies');

const allMovies = (request, response) => {
    MovieServices.getAllMovies()
        .then(data => {
            response.status(200)
            response.json({
                msg: `Successfully retrieved data`,
                data,
            });
        })
        .catch(err => {
            response.status(400).json({
                msg: `Something went wrong`,
            });
        });
}

const MovieRouter = () => {
    const router = express.Router();    

    router.get('/', allMovies);

    return router;
}

module.exports = {
    MovieRouter,
    allMovies,
}