Meteor.subscribe('banner');

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
  
  Meteor.setTimeout(function() {
    $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoplay: 1000,
      rewindNav: true,
      rewindSpeed: 1000,

      // "singleItem:true" is a shortcut for:
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false

    });
  }, 600)

  Session.set('showTraining', true);

  this.autorun(function() {
    var params = Iron.controller().getParams(),
      hash = params.hash;

    if (hash === null || hash === "training") {
      Session.set('showTraining', true);
    } else if (hash === "consulting") {
      Session.set('showTraining', false);
    }

    if (hash) {
      scrollTo('.services-container', -100);

      if (hash === "training") {
        $('#training-scroll').focus();
      } else if (hash === "consulting") {
        $('#consulting-scroll').focus();
      }

    } else {
      scrollTo('.home-container');
    }
  });
})


Template.home.onCreated(function() {
})

Template.home.helpers({
  showTraining: function() {
    return Session.get('showTraining');
  },
  autoFocusTraining: function() {
    var showTraining = Session.get('showTraining');
    if (showTraining) {
      return "autofocus";
    } else {
      return false;
    }
  },
  autoFocusConsulting: function() {
    var showTraining = Session.get('showTraining');
    if (showTraining) {
      return false;
    } else {
      return 'autofocus';
    }
  },
  banners: function() {
    console.log(this);
    return this.banners.banners;
  },
  getPicture: function(arg) {
    var id = arg.hash.pictureId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  },
  targetBlank: function(){
    console.log('TARGET BLANK', this.targetBlank);
    return this.targetBlank;
  }
});

Template.home.events({
  'click #training-scroll' : function (e,t) {
    scrollTo('.services-container', -100);
  },
  'click #consulting-scroll' : function (e,t) {
    scrollTo('.services-container', -100);
  },
  // 'click .back-to-top' : function (e,t) {
  //   scrollTo('.home-container');
  // },
});