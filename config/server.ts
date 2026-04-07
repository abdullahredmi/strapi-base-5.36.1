import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['someRandomKey1', 'someRandomKey2', 'someRandomKey3', 'someRandomKey4'],
  },
});

export default config;
