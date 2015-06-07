Meteor.subscribe('books');

Template.books.helpers({
	title: function() {
		return this.title;
	},
	description: function() {
		return this.content;
	},
	books: function() {
		return this.books;
	},
	getPicture: function(arg) {
		var id = arg.hash.pictureId;
		console.log(Images.findOne({_id: id}));
		return Images.findOne({_id: id}).url();
	}
});