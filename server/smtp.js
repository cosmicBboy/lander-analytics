// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: 'hello@sumit.io',   // eg: server@gentlenode.com
    password: 'opendevelopment',   // eg: 3eeP1gtizk5eziohfervU
    server:   'mail.privateemail.com',  // eg: smtp.google.com
    port: 465
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});