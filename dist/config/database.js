"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    const isProd = env('NODE_ENV') === 'production';
    const connection = {
        host: env(isProd ? 'DATABASE_HOST' : 'DATABASE_HOST'),
        port: env.int(isProd ? 'DATABASE_PORT' : 'DATABASE_PORT'),
        database: env(isProd ? 'DATABASE_NAME' : 'DATABASE_NAME'),
        user: env(isProd ? 'DATABASE_USERNAME' : 'DATABASE_USERNAME'),
        password: env(isProd ? 'DATABASE_PASSWORD' : 'DATABASE_PASSWORD'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: { rejectUnauthorized: false }
    };
    console.log(`🚀 Using ${isProd ? 'PROD' : 'DEV'} DB: ${connection.database}`);
    return {
        connection: {
            client: env('DATABASE_CLIENT', 'postgres'),
            connection,
            pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 5) },
            acquireConnectionTimeout: 120000,
            schema: {
                disableMigrations: false, // ⛔ Disable migration system
                disableSchemaSync: false, // ⛔ Disable schema sync (no ALTER/CREATE)
            },
        },
    };
};
