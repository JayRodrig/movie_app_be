// MOCKING OF MODULES
jest.mock('pg-promise')

// REQUIRING MODULES
const pgp = require('pg-promise')
const {getDbConn,} = require('../../services/db');

test('returns same object after multiple invocations', () => {
    pgp.mockImplementation(() => {
        return function() { return Math.floor(Math.random()*10); }
    });

    const initialVal = getDbConn('testing');

    expect(pgp.mock.calls[0][0]).toEqual({});

    expect(getDbConn('testing')).toBe(initialVal);
    expect(getDbConn('testing')).toBe(initialVal);
    expect(getDbConn('testing')).toBe(initialVal);

    expect(pgp.mock.calls.length).toBe(1);
});