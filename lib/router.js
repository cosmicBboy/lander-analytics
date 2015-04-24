var tempTrainingContent = [
  {
    'icon': '/icons/traditionalstats.png',
    'title': 'TRADITIONAL STATISTICS',
    'description': 'One-day theoretical course',
    'panelId': 'traditional-stats',
  },
  {
    'icon': '/icons/introR.png',
    'title': 'INTRO TO R',
    'description': 'One-day programming course teaching how to perform ' +
      'material learned in the Traditional Statistics Course',
    'panelId': 'intro-to-r',
  },
  {
    'icon': '/icons/modeling.png',
    'title': 'MODELING & ANALYTICS IN R',
    'description': 'One-day course with advanced topics in R',
    'panelId': 'modeling-analytics-r',
  },
  {
    'icon': '/icons/datapresentation.png',
    'title': 'DATA PRESENTATION & PORTABILITY',
    'description': 'One-day course about communicating code in R',
    'panelId': 'data-pres',
  },
  {
    'icon': '/icons/intropython.png',
    'title': 'INTRO TO PYTHON',
    'description': 'One-day course on the basics of computing and data in Python',
    'panelId': 'intro-to-python',
  },
  {
    'icon': '/icons/machinelearning.png',
    'title': 'MACHINE LEARNING',
    'description': 'One-day course combining theory and programming',
    'panelId': 'machine-learning',
  },
  {
    'icon': '/icons/highperfcomputing.png',
    'title': 'HIGH PERFORMANCE COMPUTING IN R',
    'description': 'One-day course focused on speed improvements in R',
    'panelId': 'high-perf-comp-r',
  }
]

var tempTrainingDictionary = {
  'traditional-stats': 'tradStats',
  'intro-to-r': 'introR',
  'modeling-analytics-r': 'modelR',
  'data-pres': 'dataPres',
  'intro-to-python': 'introPython',
  'machine-learning': 'machineLearn',
  'high-perf-comp-r': 'highCompR',
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home', 
  layoutTemplate: 'layout',
  data: function() {
    var data = {};
    data.content = tempTrainingContent;
    data.dictionary = tempTrainingDictionary;
    return data; 
  }
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
  layoutTemplate: 'layout',
  data: function() {
    var data = {};
    data.content = tempTrainingContent;
    data.dictionary = tempTrainingDictionary;
    return data; 
  }
});

Router.route('/contact', {
  name: 'contact', 
  layoutTemplate: 'layout'
});