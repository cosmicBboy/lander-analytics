Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  download: function(userId) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    var currentUser = Meteor.userId();
    return Roles.userIsInRole(currentUser, ['admin']);
  }
});