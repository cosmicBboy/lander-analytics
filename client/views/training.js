Template.training.helpers({
  title: function() {
    return this.title;
  },
  description: function() {
    return this.content;
  },
  trainingContent: function() {
    var data = Template.parentData(1);
    return data;
  },
  trainingContentEven: function() {
    var data = Template.parentData(1),
     content = data.trainingCourses,
     slicer = content.length - (content.length % 4);

    console.log(content);
    return content.slice(0, slicer);
  },
  trainingContentOdd: function() {
    var data = Template.parentData(1),
     content = data.trainingCourses,
     slicer = content.length - (content.length % 4);
    return content.slice(slicer);
  },
  slug: function() {
    //data context is a trainingCourse object
    return this.slug;
  },
  getIcon: function(arg) {
    var id = arg.hash.iconId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  },
});