Posts = new Meteor.Collection('posts');

Schemas = {};

// Schemas is defined in the global scope in admin.js
Schemas.Posts = new SimpleSchema({
  title: {
    type: String,
    max: 60
  },
  content: {
    type: String,
    autoform: {
      rows: 5
    }
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
});

Posts.attachSchema(Schemas.Posts);