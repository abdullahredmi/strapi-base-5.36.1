export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
    upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        s3Options: {
          region: env('S3_REGION'),
          credentials: {
            accessKeyId: env('S3_ACCESS_KEY_ID'),
            secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
          },
          params: {
            Bucket: env('S3_BUCKET'),
            ACL: 'private',
          },
        },
        baseUrl: env('S3_BASE_URL'),
      },
    },
  },
//   oembed: {
//     enabled: true,
//   },
});