export default ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';

  const connection = {
    host: env('DATABASE_HOST'),
    port: env.int('DATABASE_PORT'),
    database: env('DATABASE_NAME'),
    username: env('DATABASE_USERNAME'),   // ✅ FIXED (IMPORTANT)
    password: env('DATABASE_PASSWORD'),
    schema: env('DATABASE_SCHEMA', 'public'),
    ssl: {
      rejectUnauthorized: false,
      ca: require('fs').readFileSync('./config/prod-ca-2021.crt').toString()
    }
  };

  console.log(`🚀 Using ${isProd ? 'PROD' : 'DEV'} DB: ${connection.database}`);

  return {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection,
      pool: {
        min: 0,
        max: 5,
        idleTimeoutMillis: 30000,
        acquireTimeoutMillis: 60000
      }
    },
  };
};