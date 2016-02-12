// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: 'postmaster@www.landeranalytics.com',   // eg: server@gentlenode.com
    password: '3e21f80e3409e489cf5379c71f0d1c23',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.mailgun.org',  // eg: smtp.google.com
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
