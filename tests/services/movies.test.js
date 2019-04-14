jest.mock('../../services/db.js');
const {getDbConn,} = require('../../services/db');

const movies = require('../../services/movies');

/*
    test('db.none is called', done => {
    const mockNone = jest.fn(() => Promise.resolve())
    getDbConn.mockImplementation(() => {
        return {none: mockNone}
    })

    User.add('test')
        .then(() => {
            expect(mockNone.mock.calls[0][0]).toBe('INSERT INTO users (email) VALUES ($[email])')
            expect(mockNone.mock.calls[0][1]).toEqual({email:'test'})

            done()
        })
})
*/

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