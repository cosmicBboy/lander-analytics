About = new Meteor.Collection('about');

Schemas.About = new SimpleSchema({
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
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
      options: function() {
        return _.map(Meteor.users.find().fetch(), function(user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

About.attachSchema(Schemas.About);