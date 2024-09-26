export default () => ({
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  emailService: {
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  frontendUrl: process.env.FRONTEND_URL_ROUTE_CODE,
});
