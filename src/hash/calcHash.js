import {createHash} from "node:crypto"

const calculateHash = async () => {
    let hash = createHash('sha256').update('./files/fileToCalculateHashFor.txt').digest('hex')
    console.log(hash)
};

await calculateHash();