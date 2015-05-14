About = new Meteor.Collection('about');

var aboutSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as About Page Content"
	},
  title: {
    type: String,
    max: 60
  },
  content: {
  	type: Array,
  	optional: false,
  	minCount: 0,
  },
  "content.$": {
  	type: String,
  	label: 'Paragraph'
  },
	leadership: {
	    type: Array,
	    optional: true,
	    minCount: 0,
	    maxCount: 5
	  },
  "leadership.$": {
    type: Object
  },
  "leadership.$.name": {
    type: String
  },
  "leadership.$.positionTitle": {
    type: String
  },
  "leadership.$.picture": {
    type: String,
    autoform: {
    	afFieldInput: {
      type: 'fileUpload',
      	collection: 'Images'
    	}
    },
    label: 'Choose file'
  }
});

About.attachSchema(aboutSchema);

About.allow({
  update: function (userId, doc, fields, modifier) {
    // var currentUser = Meteor.userId();
    // return Roles.userIsInRole(currentUser, ['admin']);
    return true;
  }
})