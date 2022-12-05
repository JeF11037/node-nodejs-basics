import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/fileToCalculateHashFor.txt`;
        readFile(path, {encoding: 'utf8'})
        .then(content => console.log(createHash('sha256').update(content).digest('hex')));
    } catch (error) {
        console.error(error);
    }
}

await calculateHash();