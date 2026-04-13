"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => {
    const isProd = env('NODE_ENV') === 'production';
    const connection = {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'), // ✅ FIXED (IMPORTANT)
        password: env('DATABASE_PASSWORD'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: {
            rejectUnauthorized: false
        }
    };
    console.log(`🚀 Using ${isProd ? 'PROD' : 'DEV'} DB: ${connection.database}`);
    return {
        connection: {
            client: env('DATABASE_CLIENT', 'postgres'),
            connection,
            pool: { min: 2, max: 5 },
        },
    };
};
