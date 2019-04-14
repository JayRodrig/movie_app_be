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

const getMovie = (request, response) => {
    const {movie_id,} = request.params;
    MovieServices.getMovie(movie_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved data.`,
                data,
            });
        })
        .catch(err => {
            console.log(err);
            response.status(400).json({
                msg: `Something went wrong.`,
            });
        });
}

const allMoviesFromGenre = (request, response) => {
    const {genre_id,} = request.params;
    MovieServices.allMoviesFromGenre(genre_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved data.`,
                data,
            });
        })
        .catch(err => {
            response.status(400).json({
                msg: `Something went wrong.`,
            });
        });
}

const MovieRouter = () => {
    const router = express.Router();    

    router.get('/', allMovies);
    router.get('/:movie_id', getMovie);
    router.get('/bygenre/:genre_id', allMoviesFromGenre);

    return router;
}

module.exports = {
    MovieRouter,
}