Template.training.helpers({
  trainingContent: function() {
    var data = Template.parentData(1);
    return data.content;
  },
  trainingContentEven: function() {
    var data = Template.parentData(1),
     content = data.content,
     slicer = content.length - (content.length % 4);
    return data.content.slice(0, slicer);
  },
  trainingContentOdd: function() {
    var data = Template.parentData(1),
     content = data.content,
     slicer = content.length - (content.length % 4);
    return data.content.slice(slicer);
  },
  panelId: function() {
    //data context is a trainingCourse object
    return this.panelId;
  },
});