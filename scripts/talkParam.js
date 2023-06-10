// node talkParam.js "Let's talk about something. Shall we?"

const { exec } = require('child_process');

if (process.argv.length <= 2) {
    console.log('Please provide a phrase as a command-line argument.');
    process.exit(1);
}

let phrase = process.argv.slice(2).join(' ');

exec(`say ${phrase}`, (err, stdout, stderr) => {
    if (err) {
        // There was an error!
        console.error(err);
    } else {
        // The 'say' command completed successfully
        console.log(stdout);
    }
});
