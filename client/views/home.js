var scrollAnimate = function (offset, target) {
  $(target).animate(
    { scrollTop: offset },
    { duration: 1000, easing: 'swing' }
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

Template.home.events({
  'click #training-scroll' : function (e,t) {
    scrollTo('.training-container');
  },
});