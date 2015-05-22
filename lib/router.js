// var tempTrainingContent = [
//   {
//     'icon': '/icons/traditionalstats.png',
//     'title': 'TRADITIONAL STATISTICS',
//     'description': 'One-day theoretical course',
//     'slug': 'traditional-stats',
//   },
//   {
//     'icon': '/icons/introR.png',
//     'title': 'INTRO TO R',
//     'description': 'One-day programming course teaching how to perform ' +
//       'material learned in the Traditional Statistics Course',
//     'slug': 'intro-to-r',
//   },
//   {
//     'icon': '/icons/modeling.png',
//     'title': 'MODELING & ANALYTICS IN R',
//     'description': 'One-day course with advanced topics in R',
//     'slug': 'modeling-analytics-r',
//   },
//   {
//     'icon': '/icons/datapresentation.png',
//     'title': 'DATA PRESENTATION & PORTABILITY',
//     'description': 'One-day course about communicating code in R',
//     'slug': 'data-pres',
//   },
//   {
//     'icon': '/icons/intropython.png',
//     'title': 'INTRO TO PYTHON',
//     'description': 'One-day course on the basics of computing and data in Python',
//     'slug': 'intro-to-python',
//   },
//   {
//     'icon': '/icons/machinelearning.png',
//     'title': 'MACHINE LEARNING',
//     'description': 'One-day course combining theory and programming',
//     'slug': 'machine-learning',
//   },
//   {
//     'icon': '/icons/highperfcomputing.png',
//     'title': 'HIGH PERFORMANCE COMPUTING IN R',
//     'description': 'One-day course focused on speed improvements in R',
//     'slug': 'high-perf-comp-r',
//   }
// ]

// var tempTrainingDictionary = {
//   'traditional-stats': 'tradStats',
//   'intro-to-r': 'introR',
//   'modeling-analytics-r': 'modelR',
//   'data-pres': 'dataPres',
//   'intro-to-python': 'introPython',
//   'machine-learning': 'machineLearn',
//   'high-perf-comp-r': 'highCompR',
// }

Router.configure({
  layoutTemplate: 'layout'
});



Router.route('/', {
  name: 'home', 
  layoutTemplate: 'layout_home',
  subscriptions: function () {
    this.subscribe('training').wait();
  },
  data: function() {
    return Training.find({});
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
  layoutTemplate: 'layout_views'
});

Router.route('/courses', {
  name: 'trainingCourses', 
  layoutTemplate: 'layout_views',
  subscriptions: function () {
    this.subscribe('training').wait();
  },
  data: function() {
    return Training.find({});
  }
});

Router.route('/contact', {
  name: 'contact', 
  layoutTemplate: 'layout_views'
});