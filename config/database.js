const path = require('path');

    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi-test'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'root'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          // ssl: {
          //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          // },
        },
        debug: false,
      },
    });