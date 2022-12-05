import { env, stdout } from 'node:process';

const parseEnv = () => {
    const prefix = 'RSS_';
    try {
        console.log('\nParsing the environment variables...\n');
        const env_variables = Object.keys(env).filter(v => v.startsWith(prefix));
        for (let value of env_variables)
        {
            stdout.write(`${value} = ${env_variables[value.toString()]}; `);
        }
        console.log('\n\nDone !\n');
    } catch (error) {
        console.error(error);
    }
};

parseEnv();