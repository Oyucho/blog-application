module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86de5439730a2a0524de78e7a226cb42'),
  },
});
