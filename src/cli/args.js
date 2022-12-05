import { argv, stdout } from 'node:process';

const parseArgs = () => {
    const prefix = '--';
    try {
        console.log('\nParsing the command line arguments...\n');
        const argv_keys = argv.filter(v => v.startsWith(prefix));
        let first = true;
        for (let key of argv_keys)
        {
            if (first)
                first = false;
            else
                stdout.write(', ')
            stdout.write(`${key} is ${argv[argv.indexOf(key)+1]}`);
        }
        console.log('\n\nDone !\n');
    } catch (error) {
        console.error(error);
    }
};

parseArgs();