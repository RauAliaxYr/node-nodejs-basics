import {readdir} from 'node:fs/promises'

const list = async () => {
    const files = await readdir('./files')
        .catch(err => console.error('FS operation failed'))
    for (const file of files)
        console.log(file)
};

await list();