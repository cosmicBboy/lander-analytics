Template.overlay.onRendered(function () {
  console.log('CREATING OVERLAY TEMPLATE');
  $(window).on('keydown', function(e){
    if (e.which === 27) {
      Session.set('overlayTemplate', null);
      $('body').removeClass('noscroll');
    }
  });
});

Template.overlay.onDestroyed(function () {
  $('body').removeClass('noscroll');
});

Template.overlay.helpers({
  showTemplate: function() {
    return Session.get('overlayTemplate');
  }
});

Template.overlay.events({
  'click #close-overlay' : function(e,t) {
    Session.set('overlayTemplate', null);
  },
});