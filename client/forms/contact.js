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

    var testText = name + ' has contacted you ' +
      'for your ' + reason + ' services:\n\n' +
      reasonText + '\n' +
      'This is their message:\n\n' + message + '\n\n' +
      'You can reach them through:\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n'

    var to = 'info@landeranalytics.com';
    var from = 'info@landeranalytics.com';
    var header = '[Lander Analytics Message] ';
    subject = header + subject;

    var text = name + ' has contacted you ' +
      'for your ' + reason + ' services:\n\n' +
      'This is their message:\n\n' + message + '\n\n' +
      'You can reach them through:\n\n' +
      'Email - ' + email + '\n' +
      'Phone - ' + phone + '\n'

    Meteor.call('sendEmail', to, from, subject, testText);

    this.done();
    // You must call this.done()!
    //this.done(); // submitted successfully, call onSuccess
    //this.done(new Error('foo')); // failed to submit, call onError with the provided error
    //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
  },
};

AutoForm.addHooks(['insertContactForm'], contactHooksObject);