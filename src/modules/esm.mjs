import * as path from 'node:path'
import { release, version } from'node:os';
import { createServer } from 'node:http';
import {open} from "node:fs/promises"
import * as c from './files/c.js'


const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = open("./files/a.json",);
} else {
    unknownObject = open("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

 console.log(await unknownObject)

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});



