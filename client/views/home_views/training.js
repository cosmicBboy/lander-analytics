Meteor.subscribe('training');

Template.training.helpers({
  title: function() {
    console.log(this);
    console.log(this.training);
    return this.training.title;
  },
  description: function() {
    return this.training.content;
  },
  trainingContentEven: function() {
    var data = Template.parentData(1),
     content = data.training.trainingCourses,
     slicer = content.length - (content.length % 4);

    console.log(content);
    return content.slice(0, slicer);
  },
  trainingContentOdd: function() {
    var data = Template.parentData(1),
     content = data.training.trainingCourses,
     slicer = content.length - (content.length % 4);
    return content.slice(slicer);
  },
  contentOddIsOne: function() {
    var data = Template.parentData(1),
     content = data.training.trainingCourses,
     slicer = content.length - (content.length % 4);
    return content.slice(slicer).length === 1;
  },
  contentOddIsTwo: function() {
    var data = Template.parentData(1),
     content = data.training.trainingCourses,
     slicer = content.length - (content.length % 4);
    return content.slice(slicer).length === 2;
  },
  contentOddIsThree: function() {
    var data = Template.parentData(1),
     content = data.training.trainingCourses,
     slicer = content.length - (content.length % 4);
    return content.slice(slicer).length === 3;
  },
  slug: function() {
    //data context is a trainingCourse object
    return this.slug;
  },
  courseTitle: function() {
    return this.title;
  },
  getIcon: function(arg) {
    var id = arg.hash.iconId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  },
});