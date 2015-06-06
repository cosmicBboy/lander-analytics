Meteor.subscribe('about');

Template.onRendered(function() {
  // console.log(this);
});

Template.about.helpers({
  showOverlay : function(arg) {
    var clickedName = Session.get('leaderName'),
      checkName = arg.hash.leaderName;

    if (clickedName === checkName) {
      return true;
    } else {
      return false;
    }
  },
  title: function() {
    var data = Template.currentData();
    return data.title;
  },
  description: function() {
    var data = Template.currentData();
    return data.content;
  },
  leaders: function() {
    var data = Template.currentData();
    return data.leadership;
  },
  //leader data context
  getPicture: function(arg) {
    var id = arg.hash.pictureId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  }
});

Template.about.events({
  'click a img' : function(e,t) {
    var leader = $(e.target).parent('a').siblings('.caption').find('h3').text();
    console.log('SETTING LEADER', leader);
    // console.log(t.find('.caption h3'));
    // console.log(t.$('.caption h3'));
    Session.set('overlayTemplate', 'leaderBio');
    Session.set('leaderName', leader);
  }
  // 'click #leader-jared' : function (e,t) {
  //   Session.set('overlayTemplate', 'jaredBio');
  //   $('body').addClass('noscroll');
  // },
  // 'click #leader-howard' : function (e,t) {
  //   Session.set('overlayTemplate', 'howardBio');
  //   $('body').addClass('noscroll');
  // },
  // 'click #leader-eric' : function (e,t) {
  //   Session.set('overlayTemplate', 'ericBio');
  //   $('body').addClass('noscroll');
  // },
})

Template.leaderBio.helpers({
  name: function() {
    // console.log("LEADER NAME", Template.parentData(0));
    return Template.parentData(0).name;
  },
  title: function() {
    // console.log("LEADER TITLE", Template.parentData(0));
    return Template.parentData(0).positionTitle;
  },
  bio: function() {
    // console.log("LEADER CONTENT", Template.parentData(0));
    return Template.parentData(0).bio;
  }
})

Template.businessPartners.helpers({
  partners: function() {
    var data = Template.currentData();
    return data.businessPartners;
  },
  getPicture: function(arg) {
    var id = arg.hash.pictureId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  }
})