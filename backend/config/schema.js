export const configSchema = {
    env: {
        doc: 'Environment in which the API is running, e.g. development, production or test.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
        arg: 'env',
    },
    port: {
        doc: 'Port number on which the API is running.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port',
    },
    logger: {
        redact: {
            doc: 'List of file path to redact from the logs',
            format: Array,
            default: [],
        },
        loggerLevels: {
            doc: 'List of all logging levels with their values',
            format: Object,
            default: {
                fatal: 80,
                error: 70,
                warn: 60,
                notice: 50,
                info: 40,
                http: 30,
                debug: 20,
                trace: 10,
            },
        },
        level: {
            doc: 'Minimum logging level to print',
            format: String,
            default: 'info',
        },
    },
    db: {
        username: {
            doc: 'Username used to connect to the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_USER',
        },
        password: {
            doc: 'Password used to connect to the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_PASSWORD',
        },
        url: {
            doc: 'URL of the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_URL',
        },
        name: {
            doc: 'Name of the database',
            format: String,
            default: null,
            nullable: false,
            env: 'DB_NAME',
        },
    },
};
