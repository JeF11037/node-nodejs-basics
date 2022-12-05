import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';

const list = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path_src = `${path_dir}/files/`;
        await access(path_src, constants.F_OK)
        .then(() => 
            readdir(path_src, {withFileTypes: true})
            .then(fileNames => {
                console.log(`\nFetching file names inside ${path_src} directory...\n`);
                for (let fileName of fileNames)
                {
                    console.log(fileName.name);
                }
            })
        )
        .catch(() => console.error('FS operation failed'))
    } catch (error) {
        console.error(error);
    }
};

await list();