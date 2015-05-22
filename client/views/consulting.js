Meteor.subscribe('consulting');

Template.consulting.onRendered(function() {
  console.log('CONSULTING', this);
})

Template.consulting.helpers({
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

Template.consulting.events({
  'click #consulting-to-contact': function(e, t) {
    Session.set('contactReasonValue', 'consulting');
  }
})