import {cp} from 'node:fs/promises'

const copy = async () => {
    cp('files', 'foles_copy',
        {
            recursive: true,
            errorOnExist:true,
            force: false,
        }).catch(err => console.error('FS operation failed'))
};

await copy();
