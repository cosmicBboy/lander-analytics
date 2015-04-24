Template.about.helpers({
  showOverlay : function() {
    return Session.get('overlayTemplate');
  }
});

Template.about.events({
  'click #leader-jared' : function (e,t) {
    Session.set('overlayTemplate', 'jaredBio');
    $('body').addClass('noscroll');
  },
  'click #leader-howard' : function (e,t) {
    Session.set('overlayTemplate', 'howardBio');
    $('body').addClass('noscroll');
  },
  'click #leader-eric' : function (e,t) {
    Session.set('overlayTemplate', 'ericBio');
    $('body').addClass('noscroll');
  },
})