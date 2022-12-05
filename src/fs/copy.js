import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, cp } from 'node:fs/promises';
import { constants } from 'node:fs';

const copy = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path_src = `${path_dir}/files/`;
        const path_dest = `${path_dir}/files_copy/`;
        await access(path_src, constants.F_OK)
        .then(() => 
            access(path_dest, constants.F_OK)
            .then(() => console.error('FS operation failed'))
            .catch(() => {
                console.log('Copying the directory');
                cp(path_src, path_dest, {recursive: true});
            }))
        .catch(() => console.error('FS operation failed'))
    } catch (error) {
        console.error(error);
    }
};

copy();