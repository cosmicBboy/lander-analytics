Meteor.publish('contacts', function() {
  return Contacts.find({});
});

Meteor.publish('about', function() {
	return About.find({});
});

Meteor.publish(null, function() {
  return Images.find();
});