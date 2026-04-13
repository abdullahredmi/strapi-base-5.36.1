"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: ['someRandomKey1', 'someRandomKey2', 'someRandomKey3', 'someRandomKey4'],
    },
});
exports.default = config;
