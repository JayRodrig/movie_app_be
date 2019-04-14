// LOCAL DEPENDENCIES
const {getApp,} = require('./app');

// GLOBAL VARIABLES
const port = 3000

getApp().listen(port, () => {
    console.log(`Listening on port #${port}`);
});