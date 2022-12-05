import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, appendFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const create = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/fresh.txt`;
        await access(path, constants.F_OK)
        .then(() => console.error('FS operation failed'))
        .catch(() => {
            console.log('Creating file...');
            appendFile(path, 'I am fresh and young');
        })
    } catch (error) {
        console.error(error);
    }
};

await create();