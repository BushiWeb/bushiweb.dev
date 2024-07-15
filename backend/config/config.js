import convict from 'convict';
import { configSchema } from './schema.js';
import { access } from 'node:fs/promises';
import console from 'node:console';

export const config = convict(configSchema);

const env = config.get('env');
config.loadFile('./config/shared.json');

const environmentConfigurationFileName = `./config/${env}.json`;
try {
    await access(environmentConfigurationFileName);
    config.loadFile(environmentConfigurationFileName);
} catch (err) {
    console.error(err);
    console.warn(
        `It's impossible to access to the configuration file ${environmentConfigurationFileName}. Not loading any environment specific configuration`,
    );
}

config.validate({ allowed: 'strict', output: console.warn });
