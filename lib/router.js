Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home', 
  layoutTemplate: 'layout'
});

Router.route('/login', {
  name: 'login', 
  layoutTemplate: 'emptyLayout'
});

Router.route('/about', {
  name: 'about', 
  layoutTemplate: 'layout'
});

Router.route('/leadership', {
  name: 'leadership',
  layoutTemplate: 'layout'
});

Router.route('/data-talent', {
  name: 'dataTalent', 
  layoutTemplate: 'layout'
});

Router.route('/courses', {
  name: 'trainingCourses', 
  layoutTemplate: 'layout'
});