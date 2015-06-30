DataTalent = new Meteor.Collection('data_talent');

var dataTalentSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as About Page Content"
	},
  title: {
    type: String,
    max: 60,
    label: "Title of the Data Talent Page",
  },
	dataTalent: {
	    type: Array,
	    optional: true,
	    minCount: 0,
	},
  "dataTalent.$": {
    type: Object
  },
  "dataTalent.$.name": {
    type: String
  },
  "dataTalent.$.orderNum": {
    type: Number,
    label: "Order Number (order displayed in the website)",
    defaultValue: 0,
    optional: true,
    autoform: {
      placeholder: 0
    }
  },
  "dataTalent.$.picture": {
    type: String,
    autoform: {
    	afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
    	}
    },
    label: 'Choose a Picture'
  },
  "dataTalent.$.bio": {
  	type: String,
    label: "Bio",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        // settings: // summernote options goes here
      }
    }
  }
  // "dataTalent.$.bio": {
  //   type: Array,
  //   optional: false,
  //   minCount: 0,
  // },
  // "dataTalent.$.bio.$": {
  //   type: String,
  //   label: 'Paragraph',
  //   autoform: {
  //     afFieldInput: {
  //       type: 'textarea',
  //     }
  //   }
  // },
});

DataTalent.attachSchema(dataTalentSchema);

DataTalent.allow({
  update: function (userId, doc, fields, modifier) {
    var currentUser = Meteor.userId();
    return Roles.userIsInRole(currentUser, ['admin']);
  },
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  }
})