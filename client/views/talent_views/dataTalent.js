Template.dataTalent.helpers({
  showOverlay : function(arg) {
    var clickedName = Session.get('talentName'),
      checkName = arg.hash.talentName;

    if (clickedName === checkName) {
      return true;
    } else {
      return false;
    }
  },
  dataTalentEven: function() {
    var data = this.dataTalent,
      slicer = data.length - (data.length % 3);
    return data.slice(0, slicer);
  },
  dataTalentOdd: function() {
    var data = this.dataTalent,
      slicer = data.length - (data.length % 3);

    return data.slice(slicer);
  },
  dataTalentOddSingle: function() {
    var data = Template.parentData(1).dataTalent;
    console.log('DATA ODD SINGLE', data);
      slicer = data.length - (data.length % 3);
    return data.slice(slicer).length === 1;
  },
  getPicture: function(arg) {
    var id = arg.hash.pictureId;
    console.log(Images.findOne({_id: id}));
    return Images.findOne({_id: id}).url();
  }
});

Template.dataTalent.events({
  'click a img' : function(e,t) {
    var talent = $(e.target).parent('a').siblings('.caption').find('h4').text();
    console.log('SETTING TALENT', talent);
    // console.log(t.find('.caption h3'));
    // console.log(t.$('.caption h3'));
    Session.set('overlayTemplate', 'talentBio');
    Session.set('talentName', talent);
  }
})

Template.talentBio.helpers({
  name: function() {
    console.log("TALENT NAME", Template.parentData(0));
    return Template.parentData(0).name;
  },
  bio: function() {
    console.log("TALENT CONTENT", Template.parentData(0));
    return Template.parentData(0).bio;
  }
})