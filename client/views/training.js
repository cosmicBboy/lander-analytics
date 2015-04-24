tempTrainingContent = [
  {
    'icon': '/icons/traditionalstats.png',
    'title': 'TRADITIONAL STATISTICS',
    'description': 'One-day theoretical course',
    'panelId': 'traditional-stats',
  },
  {
    'icon': '/icons/introR.png',
    'title': 'INTRO TO R',
    'description': 'One-day programming course teaching how to perform' +
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

Template.training.helpers({
  trainingContent: function() {
    console.log(Template.parentData(1));
    var data = Template.parentData(1);
    return data.content;
  },
  panelId: function() {
    //data context is a trainingCourse object
    return this.panelId;
  },
});