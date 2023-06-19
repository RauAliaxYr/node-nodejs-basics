import * as fs from 'node:fs'
import * as zlib from 'zlib'
import {pipeline} from 'node:stream'

const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');
    const gzipStream = zlib.createGzip();
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

await compress();