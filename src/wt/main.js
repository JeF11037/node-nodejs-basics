import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

function runService(workerData, worker_file_js_path) 
{
    return new Promise((resolve, reject) => {
        const result = (status, data) => ({
            status: status,
            data: data
        });
        const status = {
            resolved: 'resolved',
            error: 'error'
        }
        const worker = new Worker(worker_file_js_path, { workerData });
        worker.on('message', (msg) => {
            resolve(result(status.resolved, msg));
        });
        worker.on('error', (err) => {
            reject(result(status.error, null));
        });
        worker.on('exit', (code) => {
            reject(result(status.error, null));
        })
    })
}

const performCalculations = async () => {
    try {
        const path_dir = dirname(fileURLToPath(import.meta.url));
        const path = `${path_dir}/worker.js`;
        const cpu_cores_number = cpus().length;
        let result = []
        const promisesArray = []
        for (let i = 10; i < 10+cpu_cores_number; i++) {
            promisesArray.push(
                await runService(i, path)
                .then(data => result.push(data))
                .catch(err => result.push(err)));
        }
        Promise.all(promisesArray);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

await performCalculations();