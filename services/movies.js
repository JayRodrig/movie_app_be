// LOCAL DEPENDENCIES
const {dbAddr,} = require('../services/db');
const {getDbConn,} = require('../services/db');

const getAllMovies = () => {
    return getDbConn(dbAddr).any(
        `select * from movies`
    );
}

const getMovie = movie_id => {
    return getDbConn(dbAddr).one(
        `
        select 
        movies.id, movies.img_url, movies.title AS movie_title, 
        genres.name AS genre_name, ratings.stars, comments.comment_text 
        from movies join genres on movies.genre_id = genres.id left join ratings on 
        movies.id = ratings.movie_id left join comments on 
        movies.id = comments.movie_id where movies.id = $[movie_id]
        `, {movie_id}
    );
}

const allMoviesFromGenre = genre_id => {
    getDbConn(dbAddr).any(
        `
        select * from movies join genres 
        on movies.genre_id = genres.id
        where movies.genre_id = $[genre_id]
        `, {genre_id}
    );
}

module.exports = {
    getAllMovies,
    getMovie,
    allMoviesFromGenre,
}
