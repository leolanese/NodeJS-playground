// npm install figlet
// node displayTom.js
var figlet = require('figlet');

figlet('TOM', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
