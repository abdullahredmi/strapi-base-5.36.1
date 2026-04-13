"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
        transfer: {
            token: {
                salt: env('TRANSFER_TOKEN_SALT'),
            },
        },
        sessions: {
            maxRefreshTokenLifespan: 2592000, // 30 days
            maxSessionLifespan: 604800, // 7 days
        }
    },
    apiToken: {
        salt: env('API_TOKEN_SALT'),
    },
    transfer: {
        token: {
            salt: env('TRANSFER_TOKEN_SALT'),
        },
    },
    secrets: {
        encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
        nps: env.bool('FLAG_NPS', true),
        promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    vite: {
        optimizeDeps: {
            exclude: [
                '@strapi/admin',
                '@strapi/content-manager',
                '@strapi/content-type-builder',
                "@strapi/design-system",
                "@strapi/icons",
            ],
        },
    },
});
