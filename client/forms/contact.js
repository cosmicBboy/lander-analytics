Meteor.subscribe('contacts');

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

    if (reason === 'Other') {
      reason = 'Custom';
    }

    var to = 'info@landeranalytics.com';
    var from = 'info@landeranalytics.com';
    var header = '[Lander Analytics Message] ';
    subject = header + subject;

    var text = name + ' has contacted you ' +
      'for your ' + reason + ' services.\n\n' +
      'This is their message:\n\n' + message + '\n\n' +
      'You can reach them through:\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n'

    Meteor.call('sendEmail', to, from, subject, text);

    this.done();
    // You must call this.done()!
    //this.done(); // submitted successfully, call onSuccess
    //this.done(new Error('foo')); // failed to submit, call onError with the provided error
    //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
  },
};

AutoForm.addHooks(['insertContactForm'], contactHooksObject);