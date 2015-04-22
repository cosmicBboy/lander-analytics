Template.trainingCourses.helpers({
  trainingContent: function() {
    return tempTrainingContent;
  },
  showAccordion: function() {

  },
  panelId: function() {
    //data context is a trainingCourse object
    return this.panelId;
  },
});

Template.trainingCourses.events({
  'click .panel-heading a': function(e, t) {
    console.log("CLICKING ON ACCORDION");
    var currentRoute = Router.current().route.path();
    console.log(currentRoute);
    var templateData = t.instance;
    console.log(templateData);
    Router.go(currentRoute + '/#traditional-stats')
  },
});