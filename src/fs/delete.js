import {rm}  from 'node:fs/promises'
const remove = async () => {
    rm('./files/fileToRemove.txt')
        .catch(err => console.error('FS operation failed'))
};

await remove();