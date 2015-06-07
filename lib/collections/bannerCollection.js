Banner = new Meteor.Collection('banner');

var bannerSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as Homepage Banner Content"
	},
  title: {
    type: String,
    max: 60
  },
	banners: {
	    type: Array,
	    optional: true,
	    minCount: 0,
	},
  "banners.$": {
    type: Object
  },
  "banners.$.name": {
    type: String
  },
  "banners.$.urlLink": {
    type: String,
    optional: true
  },
  "banners.$.targetBlank": {
    type: Boolean,
    defaultValue: false,
    label: "Open link in new tab"
  },
  "banners.$.picture": {
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

Banner.attachSchema(bannerSchema);

Banner.allow({
  update: function (userId, doc, fields, modifier) {
    var currentUser = Meteor.userId();
    return Roles.userIsInRole(currentUser, ['admin']);
  },
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  }
})