Meteor.startup(function() {
  $('#login-dropdown-list').addClass('open');
});

Template.registerHelper('showSearch', function() {
  var controller = Iron.controller();
  var params = controller.getParams();
  console.log(params);
  return params.hash === 'search';
  // return Session.get('showSearch');
});

Template.registerHelper('showContact', function() {
  var controller = Iron.controller();
  var params = controller.getParams();
  console.log(params);
  return params.hash === 'contact';
  // return Session.get('showContact');
});

Template.registerHelper('currentRoute', function() {
  var currentRoute = Router.current().route.getName();
  console.log(Router.current());
  return currentRoute;
});