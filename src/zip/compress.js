import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path_src = `${path_dir}/files/fileToCompress.txt`;
        const path_dest = `${path_dir}/files/archive.txt.gz`;
        createReadStream(path_src)
        .pipe(createGzip())
        .pipe(createWriteStream(path_dest))
        .on('finish', () => {
            console.log('Compression process done');
        });
    } catch (error) {
        console.error(error);
    }
};

await compress();