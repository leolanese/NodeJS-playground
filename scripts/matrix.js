const { spawn } = require('child_process');

let child = spawn('bash', ['-c', `yes 'c=(" " "  " "   " 0 1); printf "\${c[RANDOM%5]}"' | bash`]);

child.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
