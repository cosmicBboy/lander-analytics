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
});