jest.mock('../../services/db.js');
const {getDbConn,} = require('../../services/db');

const movies = require('../../services/movies');

test('getAllMovies will call db.any', done => {
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    movies.getAllMovies()
        .then(() => {
            expect(mockAny.mock.calls[0][0]).toBe(`select * from movies`);
            done();
        });
});

test('getMovie will call db.one', done => {
    const mockOne = jest.fn(() => Promise.resolve());
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            one: mockOne,
            any: mockAny,
        }
    });

    movies.getMovie('test')
        .then(response => {
            expect(mockOne.mock.calls[0][1]).toEqual({movie_id: 'test'});
            done();
        });
});

test('allMoviesFromGenre will call db.any', done => {
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    movies.allMoviesFromGenre('test')
        .then(response => {
            expect(mockAny.mock.calls[0][1]).toEqual({genre_id: 'test'});
            done();
        });
});

test('postComment will return db.none', done => {
    const mockNone = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            none: mockNone,
        }
    });

    movies.postComment('test', 'test')
        .then(response => {
            expect(mockNone.mock.calls[0][1]).toEqual({movie_id: 'test', comment_text: 'test'});
            done();
        });
});

test('postRating will return db.none', done => {
    const mockNone = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            none: mockNone,
        }
    });

    movies.postRating('test', 'test')
        .then(data => {
            expect(mockNone.mock.calls[0][1]).toEqual({movie_id: 'test', stars: 'test'});
            done();
        });
});