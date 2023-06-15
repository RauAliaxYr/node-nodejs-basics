import {readFile} from 'node:fs/promises'

const read = async () => {
    let text = readFile('./files/fileToRead.txt', {
        encoding: 'utf8',
        flag: 'r'
    }).then((text) => console.log("" + text))
        .catch(err => console.error('FS operation failed'))

};

await read();