// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: process.env.MAILGUN_USERNAME,
    password: process.env.MAILGUN_PASSWORD,
    server: process.env.MAILGUN_SERVER,
    port: Number(process.env.MAILGUN_PORT),
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
