var scrollAnimate = function (offset, target) {
  $(target).animate(
    { scrollTop: offset },
    { duration: 500, easing: 'swing' }
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

Template.home.onRendered(function() {
  Session.set('showTraining', true);

  $("#owl-demo").owlCarousel({
<<<<<<< HEAD
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
=======

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,

    // "singleItem:true" is a shortcut for:
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false

>>>>>>> c943b180c3e17065f12069080f8b35cad4c5a9d6
  });
})


Template.home.onCreated(function() {
})

Template.home.helpers({
  showTraining: function() {
    return Session.get('showTraining');
  },
});

Template.home.events({
  'click #training-scroll' : function (e,t) {
    Session.set('showTraining', true);
    scrollTo('.services-container', -100);
  },
  'click #consulting-scroll' : function (e,t) {
    Session.set('showTraining', false);
    scrollTo('.services-container', -100);
  },
  'click .back-to-top' : function (e,t) {
    scrollTo('.home-container');
  },
});