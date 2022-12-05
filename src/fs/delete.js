import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, rm } from 'node:fs/promises';
import { constants } from 'node:fs';

const remove = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/fileToRemove.txt`;
        await access(path, constants.F_OK)
        .then(() => {
            console.log('Removing file...');
            rm(path);
        })
        .catch(() => console.error('FS operation failed'))
    } catch (error) {
        console.error(error);
    }
};

await remove();