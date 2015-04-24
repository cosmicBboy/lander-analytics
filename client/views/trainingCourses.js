var scrollAnimate = function (offset, target) {
  $(target).animate(
    { scrollTop: offset },
    { duration: 200, easing: 'swing' }
  );
}

var scrollTo = function(element, offset, targetClass) {
  var y, target;

  if (typeof offset === 'undefined') {
    y = $(element).offset().top;
  } else {
    y = $(element).offset().top + offset;
    // console.log(y);
  }

  if (typeof targetClass === 'undefined') {
    target = 'html, body';
  } else {
    target = targetClass;
  }

  scrollAnimate(y, target);
};

Template.trainingCourses.onCreated(function () {
  var controller = Iron.controller();
  var params = controller.getParams();
  // console.log(params.hash);

  hash = '#' + params.hash;

  console.log(hash);
  console.log(params.hash);

  Meteor.setTimeout(function() {
    scrollTo(hash, -175);
  }, 100)

});

Template.trainingCourses.helpers({
  trainingContent: function() {
    return this.content;
  },
  trainingTemplate: function() {
    var panelId = this.panelId;
    var dictionary = Template.parentData(1).dictionary;
    return dictionary[panelId];
  },
  panelId: function() {
    //data context is a trainingCourse object
    return this.panelId;
  },
  currentPanelIsHash: function() {
    var controller = Iron.controller();
    var params = controller.getParams();
    if (this.panelId === params.hash) {
      return true;
    } else {
      return false;
    }
  },
});

Template.trainingCourses.events({
  'click .panel-heading a': function(e, t) {
    console.log("CLICKING ON ACCORDION");
    var hash;
    var currentRoute = Router.current().route.path();

    var controller = Iron.controller();
    var params = controller.getParams();
    // console.log(params.hash);

    if (params.hash === this.panelId) {
      hash = '';
    } else {
      hash = '#' + this.panelId;
      Router.go(currentRoute + hash);

      // Meteor.setTimeout(function() {
      //   scrollTo(hash, -200);
      // }, 225);
    }
  },
});