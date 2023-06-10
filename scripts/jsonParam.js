// node json.js "https://jsonplaceholder.typicode.com/posts/1"

const https = require('https');

if (process.argv.length <= 2) {
    console.log('Please provide a URL as a command-line argument.');
    process.exit(1);
}

let url = process.argv[2];

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        let formattedJson = JSON.stringify(JSON.parse(data), null, 4);
        console.log(formattedJson);
    });

}).on('error', (err) => {
    console.log('Error: ', err.message);
});
