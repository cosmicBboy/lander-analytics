Template.navbar.events({
  // 'click #contact' : function(event, template) {
  //   Session.set('showContact', true);
  //   Session.set('showSearch', false);
  // },
  'click .search-btn' : function(event, template) {
    // Session.set('showContact', false);
    console.log('SEARCHBOX ACTIVATING');
    Session.set('overlayTemplate', 'searchBox');
  },
   'click .contact-btn' : function(event, template) {
    // Session.set('showContact', false);
    Session.set('contactReasonValue', null);
  },
  'click .navbar-collapse': function(event, template) {
    console.log('COLLAPSE NAVBAR');
    $('.navbar-collapse').collapse('hide');
  }
});