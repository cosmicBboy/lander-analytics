Meteor.subscribe('about');

// an object with keys as collections and values as 
// the property in the collection schema to be sorted
var sortDictionary = {
  "About": "leadership",
  "DataTalent": "dataTalent",
  "Books": "books",
  "Banner": "banners",
  "Consulting": "expertiseList",
  "Training": "trainingCourses",
}

var insertHookObject = {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      var hook;
      hook = this;
      Meteor.call('adminInsertDoc', insertDoc, Session.get('admin_collection_name'), function(e, r) {

        var insertedDocId = r._id;

        if (e) {
          return hook.done(e);
        } else {
          return adminCallback('onInsert', [Session.get('admin_collection_name', insertDoc, updateDoc, currentDoc)], function(collection) {

            // if insertDoc.currentContent is true, then set the 'currentContent' 
            // attribute of all other documents in the collection to false
            if (insertDoc.currentContent === true) {
              var resetCurrentContent = {$set: {currentContent: false}},
                currentCollection = this[collection],
                notCurrentContent = currentCollection.find({_id: {$ne: insertedDocId}}).fetch();

              _.each(notCurrentContent, function(obj) {
                var id = obj._id,
                  selector = {_id: id};
                currentCollection.update(selector, resetCurrentContent);
              }); 
            }

            return hook.done(null, collection);
          });
        }
      });
      return false;
    },
    onSuccess: function(formType, collection) {
      AdminDashboard.alertSuccess('Successfully created');
      return Router.go("/admin/" + collection);
    }
}

var updateHookObject = {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      var hook;
      hook = this;
      Meteor.call('adminUpdateDoc', updateDoc, Session.get('admin_collection_name'), Session.get('admin_id'), function(e, r) {
        if (e) {
          return hook.done(e);
        } else {
          return adminCallback('onUpdate', [Session.get('admin_collection_name', insertDoc, updateDoc, currentDoc)], function(collection) {

          	// if insertDoc.currentContent is true, then set the 'currentContent' 
          	// attribute of all other documents in the collection to false            
          	if (insertDoc.currentContent === true) {
	          	var resetCurrentContent = {$set: {currentContent: false}},
	          		currentDocId = currentDoc._id;
	          		currentCollection = this[collection],
	          		notCurrentContent = currentCollection.find({_id: {$ne: currentDocId}}).fetch();

	          	_.each(notCurrentContent, function(obj) {
	          		var id = obj._id,
                  selector = {_id: id};
	          		currentCollection.update(selector, resetCurrentContent);
	          	});	
          	}

            var sortProperty = sortDictionary[collection];
            console.log(sortProperty);
            console.log(insertDoc[sortProperty]);
            console.log(updateDoc['$set'][sortProperty]);
            console.log(currentDocId);
            var sortedCourses = _.sortBy(insertDoc[sortProperty], function(obj){
              return obj.orderNum;
            });
            updateDoc['$set'][sortProperty] = sortedCourses;
            console.log(updateDoc['$set'][sortProperty]);
            currentCollection.update({_id: currentDocId}, updateDoc);
            // console.log(currentCollection.findOne({_id: currentDocId}).trainingCourses);

            return hook.done(null, collection);
          });
        }
      });
      return false;
    },
    onSuccess: function(formType, collection) {
      AdminDashboard.alertSuccess('Successfully updated');
      return Router.go("/admin/" + collection);
    }
}

AutoForm.addHooks(['admin_insert'], insertHookObject, true);
AutoForm.addHooks(['admin_update'], updateHookObject, true);