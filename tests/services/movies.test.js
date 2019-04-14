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
    getDbConn.mockImplementation(() => {
        return {
            one: mockOne,
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