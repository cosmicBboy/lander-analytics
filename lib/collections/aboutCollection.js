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
	leadership: {
	    type: Array,
	    optional: true,
	    minCount: 0,
	},
  "leadership.$": {
    type: Object
  },
  "leadership.$.name": {
    type: String
  },
  "leadership.$.orderNum": {
    type: Number,
    label: "Order Number (order displayed in the website)",
    defaultValue: 0,
    optional: true,
    autoform: {
      placeholder: 0
    }
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
  },
  "leadership.$.bio": {
    type: String,
    label: "Bio",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // settings: // summernote options goes here
      }
    }
  },
  businessPartners: {
      type: Array,
      optional: true,
      minCount: 0,
  },
  "businessPartners.$": {
    type: Object
  },
  "businessPartners.$.name": {
    type: String
  },
  "businessPartners.$.urlLink": {
    type: String
  },
  "businessPartners.$.picture": {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  },
});

About.attachSchema(aboutSchema);

About.allow({
  update: function (userId, doc, fields, modifier) {
    var currentUser = Meteor.userId();
    return Roles.userIsInRole(currentUser, ['admin']);
  },
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  }
})