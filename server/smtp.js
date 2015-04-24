// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: 'info@landeranalytics.com',   // eg: server@gentlenode.com
    password: 'password-needed',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: smtp.google.com
    port: 465
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});