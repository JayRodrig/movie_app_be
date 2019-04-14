// LOCAL DEPENDENCIES
const {dbAddr,} = require('../services/config');
const {getDbConn,} = require('../services/db');

// DB FUNCTIONS
const getAllMovies = () => {
    return getDbConn(dbAddr).any(
        `select * from movies`
    );
}

const getMovie = async movie_id => {
    return {
        movieInfo: await getDbConn(dbAddr).one(`select * from movies where movies.id = $[movie_id]`, {movie_id}),
        genre: await getDbConn(dbAddr).one(`select genres.name from genres where genres.id = $[movie_id]`, {movie_id,}),
        comments: await getDbConn(dbAddr).any(`select comments.comment_text from comments where comments.movie_id = $[movie_id]`, {movie_id,}),
        ratings: await getDbConn(dbAddr).any(`select ratings.stars from ratings where ratings.movie_id = $[movie_id]`, {movie_id,}),
    }
}

const allMoviesFromGenre = genre_id => {
    return getDbConn(dbAddr).any(
        `
        select * from movies join genres 
        on movies.genre_id = genres.id
        where movies.genre_id = $[genre_id]
        `, {genre_id}
    );
}

const postComment = (movie_id, comment_text) => {
    return getDbConn(dbAddr).none(
        `insert into comments (movie_id, comment_text)
        values ($[movie_id], $[comment_text])
        `, {movie_id, comment_text}
    );
}

const postRating = (movie_id, stars) => {
    return getDbConn(dbAddr).none(
        `
        insert into ratings (movie_id, stars) 
        values ($[movie_id], $[stars])
        `, {movie_id, stars}
    );
}


module.exports = {
    getAllMovies,
    getMovie,
    allMoviesFromGenre,
    postComment, 
    postRating, 
}