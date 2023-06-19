import {Writable} from 'node:stream'
import * as fs from 'node:fs'
import { stdin } from 'node:process'

const write = async () => {
    const fileToWrite = './files/fileToWrite.txt'
    const writableStream = new Writable({
        write(chunk, encoding, callback) {
            fs.appendFile(fileToWrite, chunk, (err) => {
                if (err) {
                    console.error(err);
                }
                callback();
            });
        },
    });
    stdin.pipe(writableStream);
}
await write();