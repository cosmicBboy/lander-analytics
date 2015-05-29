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
  title: function() {
    return this.title;
  },
  description: function() {
    return this.content;
  },
  trainingContent: function() {
    console.log(this);
    return this.trainingCourses;
  },
  trainingTemplate: function() {
    var slug = this.slug;
    var dictionary = Template.parentData(1).dictionary;
    return dictionary[slug];
  },
  slug: function() {
    //data context is a trainingCourse object
    return this.slug;
  },
  currentPanelIsHash: function() {
    var controller = Iron.controller();
    var params = controller.getParams();
    if (this.slug === params.hash) {
      return true;
    } else {
      return false;
    }
  },
  getIcon: function(arg) {
    var id = arg.hash.iconId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
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

    if (params.hash === this.slug) {
      hash = '';
    } else {
      hash = '#' + this.slug;
      Router.go(currentRoute + hash);

      // Meteor.setTimeout(function() {
      //   scrollTo(hash, -200);
      // }, 225);
    }
  },
  'click #course-to-contact': function(e, t) {
    Session.set('contactReasonValue', 'training');
  }
});

Template.topic.helpers({
  topicHeading: function() {
    var data = Template.parentData(0);
    console.log(data);
    return data.topicHeading;
  },
  subTopics: function() {
    var data = Template.parentData(0);
    return data.subTopics;
  }
});