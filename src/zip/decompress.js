import * as fs from 'node:fs'
import * as zlib from 'zlib'
import {pipeline} from 'node:stream'

const decompress = async () => {
    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const gzipStream = zlib.createGunzip();
    pipeline(
        readStream,
        gzipStream,
        writeStream,
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Nice');
            }
        }
    );
};

await decompress();