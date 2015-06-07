Router.configure({
  layoutTemplate: 'layout'
});



Router.route('/', {
  name: 'home', 
  layoutTemplate: 'layout_home',
  subscriptions: function () {
    this.subscribe('training').wait();
    this.subscribe('consulting').wait();
    this.subscribe('banner').wait();
  },
  data: function() {
    data = {};
    data.training = Training.findOne({currentContent: true});
    data.consulting = Consulting.findOne({currentContent: true});
    data.banners = Banner.findOne({currentContent: true});
    return data;
  }
});

Router.route('/login', {
  name: 'login', 
  layoutTemplate: 'layout'
});

Router.route('/about', {
  name: 'about', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('about').wait();
  },
  data: function () {
    return About.findOne({currentContent: true});
  }
});

Router.route('/leadership', {
  name: 'leadership',
  layoutTemplate: 'layout_views'
});

Router.route('/data-talent', {
  name: 'dataTalent', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('data_talent').wait();
  },
  data: function() {
    return DataTalent.findOne({currentContent: true});
  }
});

Router.route('/books', {
  name: 'books', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('books').wait();
  },
  data: function() {
    return Books.findOne({currentContent: true});
  }
});

Router.route('/courses', {
  name: 'trainingCourses', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('training').wait();
  },
  data: function() {
    return Training.findOne({currentContent: true});
  }
});

Router.route('/consulting', {
  name: 'consultingServices', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('consulting').wait();
  },
  data: function() {
    var data = {};
    data.consulting = Consulting.findOne({currentContent: true});
    return data;
  }
});

Router.route('/contact', {
  name: 'contact', 
  layoutTemplate: 'layout_views',
  subscriptions: function() {
    this.subscribe('training').wait();
    this.subscribe('consulting').wait();
  }
});