Training = new Meteor.Collection('training');

var trainingSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Course Title",
		max: 60
	},
  	description: {
	  	type: String,
	    autoform: {
	      afFieldInput: {
	        type: 'textarea',
	      }
	    }
  	},
  	icon: {
		type: String,
		autoform: {
			afFieldInput: {
		    type: 'fileUpload',
		    collection: 'Images'
			}
		},
		label: 'Choose an Icon Picture'
	},
	slug: {
		type: String,
		max: 60,
		label: "Course Slug",
		autoform: {
			placeholder: "This is the name that shows up on the url"
		}
	},
	topicList: {
    type: String,
    label: "Topic List",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // settings: // summernote options goes here
      }
    }
  },
});

var trainingPageSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as Training Page Content"
	},
  title: {
    type: String,
    max: 60,
    label: "Page Title"
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
  trainingCourses: {
  	type: Array,
  	label: "Course",
  },
  "trainingCourses.$": {
  	type: trainingSchema,
  	label: "Course"
  }
});

Training.attachSchema(trainingPageSchema);

Training.allow({
	update: function (userId, doc, fields, modifier) {
		var currentUser = Meteor.userId();
		return Roles.userIsInRole(currentUser, ['admin']);
	},
	insert: function (userId, doc) {
		return Roles.userIsInRole(userId, ['admin']);
	}
})