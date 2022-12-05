import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path_src = `${path_dir}/files/archive.txt.gz`;
        const path_dest = `${path_dir}/files/fileToCompress.txt`;   
        createReadStream(path_src)
        .pipe(createUnzip())
        .pipe(createWriteStream(path_dest))
        .on('finish', () => {
            console.log('Decompression process done');
        });
    } catch (error) {
        console.error(error);
    }
};

await decompress();