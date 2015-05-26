Meteor.subscribe('consulting');

Template.consultingServices.onRendered(function() {
  console.log('CONSULTING', this);
})

Template.consultingServices.helpers({
  title: function() {
    return this.consulting.title;
  },
  description: function() {
    return this.consulting.content;
  },
  expertiseList: function() {
    return this.consulting.expertiseList;
  },
  expertiseId: function() {
    //data context is a trainingCourse object
    return this.expertiseId;
  },
});

Template.consultingServices.events({
  'click #consulting-to-contact': function(e, t) {
    Session.set('contactReasonValue', 'consulting');
  }
})