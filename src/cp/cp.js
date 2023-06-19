import {spawn} from 'node:child_process'
const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', ...args], { stdio: ['pipe', 'pipe', process.stderr] });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess("asdas","asdasd","asdas");
