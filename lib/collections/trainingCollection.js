Training = new Meteor.Collection('training');

var trainingSchema = new SimpleSchema({
	order: {
	  type: Number,
	  label: "Order to be displayed on the course page"
	},
	title: {
		type: String,
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
		type: Array,
		minCount: 1,
	},
	"topicList.$": {
	  	type: Object,
    },
    "topicList.$.topicHeading": {
	  	type: String,
	  	label: 'Topic Title',
    },
    "topicList.$.subTopics": {
	  	type: Array,
	  	optional: true,
	  	autoform: {
	  		label: 'Subtopics',
	  	}
    },
    "topicList.$.subTopics.$": {
	  	type: Object,
    },
    "topicList.$.subTopics.$": {
	  	type: String,
	  	label: "Subtopic Title"
    },
});

Training.attachSchema(trainingSchema);

Training.allow({
	update: function (userId, doc, fields, modifier) {
		var currentUser = Meteor.userId();
		return Roles.userIsInRole(currentUser, ['admin']);
	},
	insert: function (userId, doc) {
		return Roles.userIsInRole(userId, ['admin']);
	}
})