Template.navbar.events({
  'click #contact' : function(event, template) {
    Session.set('showContact', true);
    Session.set('showSearch', false);
  },
  'click #search' : function(event, template) {
    Session.set('showContact', false);
    Session.set('showSearch', true);
  },
});