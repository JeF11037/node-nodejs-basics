import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const read = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        createReadStream(`${path_dir}/files/fileToRead.txt`)
        .pipe(process.stdout);
    } catch (error) {
        console.error(error);
    }
};

await read();