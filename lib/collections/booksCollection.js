Books = new Meteor.Collection('books');

var bookSchema = new SimpleSchema({
	currentContent: {
	  type: Boolean,
	  defaultValue: false,
	  label: "Set as Book Page Content"
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
	books: {
	    type: Array,
	    optional: true,
	    minCount: 0,
	},
  "books.$": {
    type: Object
  },
  "books.$.name": {
    type: String
  },
  "books.$.author": {
    type: String
  },
  "books.$.picture": {
    type: String,
    autoform: {
    	afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
    	}
    },
    label: 'Choose file'
  },
  "books.$.urlLink": {
    type: String,
    label: "Url Link",
    autoform: {
      afFieldInput: {
        type: "url",
      }
    }
  }
});

Books.attachSchema(bookSchema);

Books.allow({
  update: function (userId, doc, fields, modifier) {
    var currentUser = Meteor.userId();
    return Roles.userIsInRole(currentUser, ['admin']);
  },
  insert: function (userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  }
})