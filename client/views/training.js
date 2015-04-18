tempTrainingContent = [
  {
    'icon': 'fa-area-chart',
    'title': 'TRADITIONAL STATISTICS',
    'description': 'One-day theoretical course',
    'panelId': 'traditional-stats',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'INTRO TO R',
    'description': 'One-day programming course teaching how to perform' +
      'material learned in the Traditional Statistics Course',
    'panelId': 'intro-to-r',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'MODELING & ANALYTICS IN R',
    'description': 'One-day course with advanced topics in R',
    'panelId': 'modeling-analytics-r',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'DATA PRESENTATION AND PORTABILITY',
    'description': 'One-day course about communicating code in R',
    'panelId': 'intro-to-python',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'INTRO TO PYTHON',
    'description': 'One-day course on the basics of computing and data in Python',
    'panelId': 'intro-to-python',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'MACHINE LEARNING',
    'description': 'One-day course combining theory and programming',
    'panelId': 'machine-learning',
  },
  {
    'icon': 'fa-area-chart',
    'title': 'HIGH PERFORMANCE COMPUTING IN R',
    'description': 'One-day course focused on speed improvements in R',
    'panelId': 'high-perf-comp-r',
  }
]

Template.training.helpers({
  trainingContent: function() {
    return tempTrainingContent
  }
});