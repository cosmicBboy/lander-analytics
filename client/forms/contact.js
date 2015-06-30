Meteor.subscribe('contacts');
Meteor.subscribe('training');
Meteor.subscribe('consulting');

Template.insertContactForm.helpers({
  trainingOptions: function() {
    var data = Training.findOne({currentContent: true}),
     courses = [];

    _.each(data.trainingCourses, function(obj) {
      var tempObj = {};
      tempObj.label = obj.title;
      tempObj.value = obj.title;
      tempObj._id = obj.title;
      courses.push(tempObj);
    })

    return courses;
  },
  consultingOptions: function() {
    var data = Consulting.findOne({currentContent: true}),
      services = [];

    _.each(data.expertiseList, function(obj) {
      var tempObj = {};
      tempObj.label = obj.expertiseLabel;
      tempObj.value = obj.expertiseLabel;
      services.push(tempObj);
    })

    return services
  },
  reasonValue: function() {
    var reason = Session.get('contactReasonValue');
    if (reason === 'training') {
      return 'Training';
    } else if (reason === 'consulting') {
      return 'Consulting';
    } else {
      return null;
    }
  }
});

Template.insertContactForm.events({
  'submit' : function(e, t) {
    e.preventDefault();
    console.log('CLICKING SUBMIT');
    // Notifications.success('Message successfully sent', 'Thank you for contacting us. We\'ll get back to you soon!');
  },
})

var contactHooksObject = {
  // after: {
    // Replace `formType` with the form `type` attribute to which this hook applies
    // insert: function(error, result) {
    //   console.log(this);
    //   console.log(this.currentDoc);
    //   console.log(this.insertDoc);
    //   console.log(result);
    // }
  // },
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    console.log(insertDoc);
    Contacts.insert(insertDoc);

    var name = insertDoc.name,
      email = insertDoc.email,
      phone = insertDoc.phone,
      reason = insertDoc.reason,
      subject = insertDoc.subject,
      message = insertDoc.message;

    var courses = insertDoc.courses,
      consulting = insertDoc.consulting;

    console.log(courses, consulting);

    if (reason === 'Other') {
      reason = 'Custom';
    }

    var reasonText = '';

    if (courses) {
      _.each(courses, function(item) {
        reasonText = reasonText + '- ' + item  + '\n';
      })
    } else if (consulting) {
      _.each(consulting, function(item) {
        reasonText = reasonText + '- ' + item  + '\n';
      })
    }

    var to = 'info@landeranalytics.com';
    var from = email;
    var header = '[Lander Analytics Message] ';
    subject = header + subject;

    var text = name + ' has contacted you ' +
      'for your ' + reason + ' services:\n\n' +
      reasonText + '\n' +
      'This is their message:\n\n' + message;

    console.log(text);

    Meteor.call('sendEmail', to, from, subject, text);

    this.done(null);
  },
  onSuccess: function() {
    Notifications.success('Message successfully sent', 'Thank you for contacting us. We\'ll get back to you soon!');  
    console.log('CONTACT FORM SUBMITTED');
  }
};

AutoForm.addHooks(['insertContactForm'], contactHooksObject);