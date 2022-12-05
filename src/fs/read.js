import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const read = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/fileToRead.txt`;
        await access(path, constants.F_OK)
        .then(() => 
            readFile(path, {encoding: 'utf8'})
            .then(content => console.log(content))
        )
        .catch(() => console.error('FS operation failed'))
    } catch (error) {
        console.error(error);
    }
};

await read();