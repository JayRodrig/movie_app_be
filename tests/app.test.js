// MOCKING OF MODULES
jest.mock('express');

jest.mock('body-parser', () => {
    return {
        json: () => 'bogus',
    }
});

// REQUIRING MODULES
const express = require('express');
const bodyParser = require('body-parser');
const {getApp,} = require('../app');

test('App.use is ran this many times', done => {
    const mockUse = jest.fn();
    const mockApp = {
        use: mockUse,
    }

    express.mockImplementation(() => {
        return mockApp;
    });

    const app = getApp();

    expect(app).toEqual(mockApp);
    expect(mockUse.mock.calls.length).toBe(2);
    expect(mockUse.mock.calls[0][0]).toBe('bogus');

    done();
});


