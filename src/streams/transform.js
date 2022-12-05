import { Transform } from 'node:stream';

const transform = async () => {
    try {
        const reverseTextTransform = new Transform({
            transform: (chunk, encoding, cb) => {
                const result = chunk.toString().split('').reverse().join('')+'\n';
                cb(null, result);
            }
        });
    
        process.stdin
        .pipe(reverseTextTransform)
        .pipe(process.stdout);
    } catch (error) {
        console.error(error);
    }
};

await transform();