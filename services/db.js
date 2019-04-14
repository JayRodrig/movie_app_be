// NPM MODULES
const pgp = require('pg-promise');

// IIFE FUNCTION RETURNING DB CONNECTION VARIABLE
const getDBConn = (() => {
    let dbConn = null;
    return dbAddr => {
        if (!dbConn) {
            dbConn = pgp({})(dbAddr);
        }
        return dbConn;
    }
})();

module.exports = {
    getDbConn,
}