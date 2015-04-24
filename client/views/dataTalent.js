Template.dataTalent.helpers({
  showOverlay : function() {
    return Session.get('overlayTemplate');
  }
});

Template.dataTalent.events({
  'click #team-jared' : function (e,t) {
    Session.set('overlayTemplate', 'jaredTalent');
    $('body').addClass('noscroll');
  },
  'click #team-andrew' : function (e,t) {
    Session.set('overlayTemplate', 'andrewTalent');
    $('body').addClass('noscroll');
  },
  'click #team-daniel' : function (e,t) {
    Session.set('overlayTemplate', 'danielTalent');
    $('body').addClass('noscroll');
  },
  'click #team-bob' : function (e,t) {
    Session.set('overlayTemplate', 'bobTalent');
    $('body').addClass('noscroll');
  },
  'click #team-vivian' : function (e,t) {
    Session.set('overlayTemplate', 'vivianTalent');
    $('body').addClass('noscroll');
  },
})