import {rename as kek}  from 'node:fs/promises'
const rename = async () => {
    kek("./files/wrongFilename.txt",'./files/properFilename.md')
        .catch(err => console.error('FS operation failed'))
};

await rename();