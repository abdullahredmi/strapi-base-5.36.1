"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'img-src': ['*', 'data:', 'blob:', 'https://djwgk7m51anqx.cloudfront.net'],
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            origin: [
                'http://localhost:3000',
                'http://localhost:8000',
            ],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            keepHeaderOnError: true,
            expose: ['WWW-Authenticate', 'Server-Authorization'],
            credentials: true,
        },
    },
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    // 'strapi::body',
    {
        name: 'strapi::body',
        config: {
            multipart: true,
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
