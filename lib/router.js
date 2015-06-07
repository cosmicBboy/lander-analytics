Router.configure({
  layoutTemplate: 'layout'
});



Router.route('/', {
  name: 'home', 
  layoutTemplate: 'layout_home',
  waitOn: function () {
    return [
      Meteor.subscribe('training'),
      Meteor.subscribe('consulting'),
      Meteor.subscribe('banner'),
    ];
  },
  data: function() {
    data = {};
    data.training = Training.findOne({currentContent: true});
    data.consulting = Consulting.findOne({currentContent: true});
    data.banners = Banner.findOne({currentContent: true});
    return data;
  },
  fastRender: true,
});

Router.route('/login', {
  name: 'login', 
  layoutTemplate: 'layout'
});

Router.route('/about', {
  name: 'about', 
  layoutTemplate: 'layout_views',
  waitOn: function () {
    return Meteor.subscribe('about');
  },
  data: function () {
    return About.findOne({currentContent: true});
  },
  fastRender: true,
});

Router.route('/leadership', {
  name: 'leadership',
  layoutTemplate: 'layout_views'
});

Router.route('/data-talent', {
  name: 'dataTalent', 
  layoutTemplate: 'layout_views',
  waitOn: function () {
    return Meteor.subscribe('data_talent');
  },
  data: function() {
    return DataTalent.findOne({currentContent: true});
  },
  fastRender: true,
});

Router.route('/books', {
  name: 'books', 
  layoutTemplate: 'layout_views',
  waitOn: function () {
    return Meteor.subscribe('books');
  },
  data: function() {
    return Books.findOne({currentContent: true});
  },
  fastRender: true,
});

Router.route('/courses', {
  name: 'trainingCourses', 
  layoutTemplate: 'layout_views',
  waitOn: function () {
    return Meteor.subscribe('training');
  },
  data: function() {
    return Training.findOne({currentContent: true});
  },
  fastRender: true,
});

Router.route('/consulting', {
  name: 'consultingServices', 
  layoutTemplate: 'layout_views',
  waitOn: function () {
    return Meteor.subscribe('consulting');
  },
  data: function() {
    var data = {};
    data.consulting = Consulting.findOne({currentContent: true});
    return data;
  },
  fastRender: true,
});

Router.route('/contact', {
  name: 'contact', 
  layoutTemplate: 'layout_views',
  waitOn: function() {
    return [
      Meteor.subscribe('training'),
      Meteor.subscribe('consulting'),
    ]
  },
  fastRender: true,
});