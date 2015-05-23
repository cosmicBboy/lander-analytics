Consulting = new Meteor.Collection('consulting');

var consultingPageSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as Training Page Content"
	},
	title: {
		type: String,
		label: "Page Title",
		max: 60
	},
  content: {
    type: String,
    label: "Content",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // settings: // summernote options goes here
      }
    }
  },
  expertiseList: {
  	type: Array,
  	label: "Expertise List",
  },
  "expertiseList.$": {
  	type: Object,
  	label: "Expertise"
  },
  "expertiseList.$.expertiseLabel": {
  	type: String,
  	label: "Expertise Label"
  },
  "expertiseList.$.expertiseId": {
  	type: String,
  	label: "Unique ID",
  	autoform: {
  		placeholder: "This is important for the auto-fill contact form"
  	}
  },
});

Consulting.attachSchema(consultingPageSchema);

Consulting.allow({
	update: function (userId, doc, fields, modifier) {
		var currentUser = Meteor.userId();
		return Roles.userIsInRole(currentUser, ['admin']);
	},
	insert: function (userId, doc) {
		return Roles.userIsInRole(userId, ['admin']);
	}
})