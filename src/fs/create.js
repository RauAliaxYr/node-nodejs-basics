import {writeFile} from 'node:fs/promises'

const create = async () => {
    writeFile('files/fresh.txt', 'I am fresh and young', {
        flag: 'wx'
    }).catch(err => console.error('FS operation failed'))
};
await create();