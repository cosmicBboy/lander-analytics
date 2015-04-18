var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
};

var isValidPassword = function(val) {
  return val.length > 0 ? true : false; 
};

// TODO fix above later
Template.login.events({

    'click .glyphicon-remove' : function(e, t){
      Router.go('/');
    },
    'click button' : function(e, t){
      e.preventDefault();

      var email = t.find('.login-username-email').value,
        password = t.find('.login-password').value;

        // Trim and validate your fields here.... 
        email = trimInput(email).toString();
        passValid = isValidPassword(password);

        if(!passValid || email.trim() === "") {
          Notifications.error('Incomplete login Information', 'Please provide a username and password');
          return false;
        }

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){

          if (err){
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed. 
            console.error("failed to log in ... ", err);
            Notifications.error('Invalid username or password', 'Please try again!');

          } else {
            // The user has been logged in.
            console.log("successfully logged in ... ");
            Router.go('/admin');
            return true;
          }
          
        });
      return false; 
    }
});

Template.login.rendered = function(){ 
  $(window).on('keydown', function(e){
    if (e.which === 27) {
      Meteor.navigateTo('/');
      Session.set('loginAlert', false);
    }
  });
};

Meteor.startup(function () {
    _.extend(Notifications.defaultOptions, {
        timeout: 4000
    });
});