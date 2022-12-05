import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/files/script.js`;
        const child = fork(path, args);
    } catch (error) {
        console.error(error);
    }
};

spawnChildProcess(['a', 'b', 'c']);