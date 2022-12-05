import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, rename as rn } from 'node:fs/promises';
import { constants } from 'node:fs';

const rename = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path_old = `${path_dir}/files/wrongFilename.txt`;
        const path_new = `${path_dir}/files/properFilename.md`;
        await access(path_new, constants.F_OK)
        .then(() => console.error('FS operation failed'))
        .catch(() => 
            access(path_old, constants.F_OK)
            .then(() => {
                console.log('Renaming the file');
                rn(path_old, path_new);
            })
            .catch(() => console.error('FS operation failed'))
        )
    } catch (error) {
        console.error(error);
    }
};

await rename();