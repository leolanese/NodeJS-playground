const { spawn } = require('child_process');

// Get terminal width
spawn('tput', ['cols']).stdout.on('data', (data) => {
    let columns = data.toString().trim();

    let child = spawn('bash', ['-c', `LC_ALL=C tr -c '[:digit:]' ' ' < /dev/urandom | dd cbs=${columns} conv=unblock | GREP_COLOR='1;32' grep --color '[^ ]'`]);

    child.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});
