// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: 'postmaster@sandbox1ada59bc6bb741578c246537656b2ad5.mailgun.org',   // eg: server@gentlenode.com
    password: 'password-needed',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.mailgun.org',  // eg: smtp.google.com
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});