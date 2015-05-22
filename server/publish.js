Meteor.publish('contacts', function() {
  return Contacts.find({});
});

Meteor.publish('training', function() {
	return Training.find({});
});

Meteor.publish('about', function() {
	return About.find({});
});

Meteor.publish('data_talent', function() {
	return DataTalent.find({});
});

Meteor.publish(null, function() {
  return Images.find();
});