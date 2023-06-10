const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
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
