import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { appendFile } from 'node:fs/promises';

const write = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/fileToWrite.txt`;
        process.stdin.on("data", data => {
            appendFile(path, data.toString()+'\n');
        });
    } catch (error) {
        console.error(error);
    }
};

await write();